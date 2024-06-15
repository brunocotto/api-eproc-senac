import { PrismaService } from 'src/database/prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/protective-measures')
export class FetchProtectiveMeasuresController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async fetchAll() {
    const protectiveMeasures = await this.prisma.medidasProtetivas.findMany({
      include: {
        vitima: true,
        agressor: true,
        visitas: {
          include: {
            policial: {
              select: {
                id: true,
                enderecoId: true,
                nome: true,
                cpf: true,
                rg: true,
                telefone: true,
                email: true,
                senha: false,
                dataNascimento: true,
                matricula: true,
                dataAdmissao: true,
                turno: true,
                batalhao: true,
              },
            },
          },
        },
      },
    });
    return protectiveMeasures;
  }
}