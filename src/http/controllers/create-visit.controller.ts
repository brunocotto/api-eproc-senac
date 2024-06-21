import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

import { z } from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

const createVisitBodySchema = z.object({
  mpId: z.number(),
  policialId: z.number(),
  data: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  horaInicio: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  horaFim: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  presente: z.boolean(),
});

const bodyValidationType = new ZodValidationPipe(createVisitBodySchema);

type CreateVisitBodySchema = z.infer<typeof createVisitBodySchema>;

@Controller('/visits')
export class CreateVisitController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationType) body: CreateVisitBodySchema) {
    const { mpId, policialId, data, horaInicio, horaFim, presente } = body;

    try {
      const visit = await this.prisma.visita.create({
        data: {
          mpId,
          policialId,
          data: new Date(data),
          horaInicio: new Date(horaInicio),
          horaFim: new Date(horaFim),
          presente,
        },
      });

      return visit;
    } catch (error) {
      throw new BadRequestException(
        'An error occurred while creating the visit.',
      );
    }
  }
}
