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

const createVictimBodySchema = z.object({
  enderecoId: z.number(),
  nome: z.string().nullable(),
  nacionalidade: z.string().nullable(),
  estadoCivil: z.string().nullable(),
  sexo: z.string().nullable(),
  cpf: z.string().nullable(),
  rg: z.number(),
  telefone: z.string().nullable(),
  email: z.string().nullable(),
  profissao: z.string().nullable(),
  filiacaoMaterna: z.string().nullable(),
  filiacaoPaterna: z.string().nullable(),
  dataNascimento: z
    .string()
    .nullable()
    .refine((date) => date === null || !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    }),
});

type CreateVictimBodySchema = z.infer<typeof createVictimBodySchema>;

@Controller('/victims')
export class CreateVictimController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateVictimBodySchema) {
    const {
      enderecoId,
      nome,
      nacionalidade,
      estadoCivil,
      sexo,
      cpf,
      rg,
      telefone,
      email,
      profissao,
      filiacaoMaterna,
      filiacaoPaterna,
      dataNascimento,
    } = body;

    try {
      const victim = await this.prisma.vitima.create({
        data: {
          enderecoId,
          nome,
          nacionalidade,
          estadoCivil,
          sexo,
          cpf,
          rg,
          telefone,
          email,
          profissao,
          filiacao_materna: filiacaoMaterna,
          filiacao_paterna: filiacaoPaterna,
          dataNascimento: dataNascimento ? new Date(dataNascimento) : null,
        },
      });

      return victim;
    } catch (error) {
      if (error.code === 'P2002') {
        const target = error.meta.target;
        if (target.includes('cpf')) {
          throw new ConflictException('The provided CPF is already in use.');
        } else if (target.includes('rg')) {
          throw new ConflictException('The provided RG is already in use.');
        } else if (target.includes('email')) {
          throw new ConflictException('The provided email is already in use.');
        }
      }
      throw new BadRequestException(
        'An error occurred while creating the victim.',
      );
    }
  }
}
