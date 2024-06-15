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

const createPoliceOfficerBodySchema = z.object({
  enderecoId: z.number(),
  nome: z.string().nullable(),
  cpf: z.string().nullable(),
  rg: z.number(),
  telefone: z.string().nullable(),
  email: z.string(),
  senha: z.string(),
  dataNascimento: z
    .string()
    .nullable()
    .refine((date) => date === null || !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    }),
  matricula: z.number().nullable(),
  dataAdmissao: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  turno: z.string().nullable(),
  batalhao: z.string().nullable(),
});

type CreatePoliceOfficerBodySchema = z.infer<
  typeof createPoliceOfficerBodySchema
>;

@Controller('/police-officers')
export class CreatePoliceOfficerController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreatePoliceOfficerBodySchema) {
    const {
      enderecoId,
      nome,
      cpf,
      rg,
      telefone,
      email,
      senha,
      dataNascimento,
      matricula,
      dataAdmissao,
      turno,
      batalhao,
    } = body;

    try {
      const policeOfficer = await this.prisma.policial.create({
        data: {
          enderecoId,
          nome,
          cpf,
          rg,
          telefone,
          email,
          senha,
          dataNascimento: dataNascimento ? new Date(dataNascimento) : null,
          matricula,
          dataAdmissao: new Date(dataAdmissao),
          turno,
          batalhao,
        },
      });

      return policeOfficer;
    } catch (error) {
      if (error.code === 'P2002') {
        const target = error.meta.target;
        if (target.includes('cpf')) {
          throw new ConflictException('The provided CPF is already in use.');
        } else if (target.includes('rg')) {
          throw new ConflictException('The provided RG is already in use.');
        } else if (target.includes('email')) {
          throw new ConflictException('The provided email is already in use.');
        } else if (target.includes('matricula')) {
          throw new ConflictException(
            'The provided matricula is already in use.',
          );
        }
      }
      throw new BadRequestException(
        'An error occurred while creating the police officer.',
      );
    }
  }
}
