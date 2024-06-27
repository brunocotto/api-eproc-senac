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
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

const createVictimBodySchema = z.object({
  // Campos do endereço
  estado: z.string().nullable(),
  cidade: z.string().nullable(),
  cep: z.string().nullable(),
  rua: z.string().nullable(),
  numero: z.number().nullable(),
  complemento: z.string().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  // Campos da vítima
  nome: z.string().nullable(),
  nacionalidade: z.string().nullable(),
  estadoCivil: z.string().nullable(),
  sexo: z.enum(['Feminino', 'Masculino']),
  cpf: z.string().nullable(),
  rg: z.number(),
  telefone: z.string().nullable(),
  email: z.string().nullable(),
  profissao: z.string().nullable(),
  filiacaoMaterna: z.string().nullable(),
  filiacaoPaterna: z.string().nullable(),
  naturalidade: z.string().nullable(),
  instrucao: z.string().nullable(),
  localTrabalho: z.string().nullable(),
  dataNascimento: z
    .string()
    .nullable()
    .refine((date) => date === null || !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    }),
});

const bodyValidationType = new ZodValidationPipe(createVictimBodySchema);

type CreateVictimBodySchema = z.infer<typeof createVictimBodySchema>;

@Controller('/victims')
export class CreateVictimController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationType) body: CreateVictimBodySchema) {
    const {
      // Campos do endereço
      estado,
      cidade,
      cep,
      rua,
      numero,
      complemento,
      latitude,
      longitude,
      // Campos da vítima
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
      naturalidade,
      instrucao,
      localTrabalho,
    } = body;

    try {
      // Primeiro, cria o endereço
      const endereco = await this.prisma.endereco.create({
        data: {
          estado,
          cidade,
          cep,
          rua,
          numero,
          complemento,
          latitude,
          longitude,
        },
      });

      // Depois, cria a vítima usando o ID do endereço criado
      const victim = await this.prisma.vitima.create({
        data: {
          enderecoId: endereco.id,
          nome,
          nacionalidade,
          estadoCivil,
          sexo,
          cpf,
          rg,
          telefone,
          email,
          profissao,
          naturalidade,
          instrucao,
          localTrabalho,
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
          throw new ConflictException('O CPF fornecido já está em uso.');
        } else if (target.includes('rg')) {
          throw new ConflictException('O RG fornecido já está em uso.');
        } else if (target.includes('email')) {
          throw new ConflictException('O email fornecido já está em uso.');
        }
      }
      throw new BadRequestException('Ocorreu um erro ao criar a vítima.');
    }
  }
}
