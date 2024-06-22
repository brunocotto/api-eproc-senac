import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

import { z } from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

const updateVisitBodySchema = z.object({
  mpId: z.number().optional(),
  policialId: z.number().optional(),
  data: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    })
    .optional(),
  horaInicio: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    })
    .optional(),
  horaFim: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    })
    .optional(),
  presente: z.boolean().optional(),
  status: z
    .enum(['AGENDADA', 'CONCLUIDA', 'CANCELADA', 'REAGENDADA'])
    .optional(),
});

const bodyValidationType = new ZodValidationPipe(updateVisitBodySchema);

type UpdateVisitBodySchema = z.infer<typeof updateVisitBodySchema>;

@Controller('/visits')
export class UpdateVisitController {
  constructor(private prisma: PrismaService) {}

  @Put(':id')
  @HttpCode(200)
  async handle(
    @Param('id') id: number,
    @Body(bodyValidationType) body: UpdateVisitBodySchema,
  ) {
    const { mpId, policialId, data, horaInicio, horaFim, presente, status } =
      body;

    try {
      const visit = await this.prisma.visita.update({
        where: { id: Number(id) },
        data: {
          ...(mpId !== undefined && { mpId }),
          ...(policialId !== undefined && { policialId }),
          ...(data !== undefined && { data: new Date(data) }),
          ...(horaInicio !== undefined && { horaInicio: new Date(horaInicio) }),
          ...(horaFim !== undefined && { horaFim: new Date(horaFim) }),
          ...(presente !== undefined && { presente }),
          ...(status !== undefined && { status }),
        },
      });

      return visit;
    } catch (error) {
      throw new BadRequestException(
        'An error occurred while updating the visit.',
      );
    }
  }
}
