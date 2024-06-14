import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { z } from 'zod';

const createProtectiveMeasureBodySchema = z.object({
  vitimaId: z.number(),
  agressorId: z.number(),
  tipoAcao: z.string(),
  numProcesso: z.number(),
  numOcorrencia: z.number(),
  orgaoExpedidor: z.string(),
  primeiraVisita: z.boolean(),
  nivelFrida: z.number(),
  status: z.string(),
  criadoEm: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  expiraEm: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
});

type CreateProtectiveMeasureBodySchema = z.infer<
  typeof createProtectiveMeasureBodySchema
>;

@Controller('/upload-protective-measure')
export class CreateProtectiveMeasureController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateProtectiveMeasureBodySchema) {
    const {
      vitimaId,
      agressorId,
      tipoAcao,
      numProcesso,
      numOcorrencia,
      orgaoExpedidor,
      primeiraVisita,
      nivelFrida,
      status,
      criadoEm,
      expiraEm,
    } = body;

    try {
      const protectiveMeasure = await this.prisma.medidasProtetivas.create({
        data: {
          vitimaId,
          agressorId,
          tipoAcao,
          numProcesso,
          numOcorrencia,
          orgaoExpedidor,
          primeiraVisita,
          nivelFrida,
          status,
          criadoEm: new Date(criadoEm),
          expiraEm: new Date(expiraEm),
        },
      });

      return protectiveMeasure;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('A unique constraint would be violated.');
      }
      throw new BadRequestException(
        'An error occurred while creating the protective measure.',
      );
    }
  }
}
