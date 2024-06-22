import { PrismaService } from 'src/database/prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/protective-measures')
export class GetAllProtectiveMeasuresController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    const protectiveMeasures = await this.prisma.medidasProtetivas.findMany({
      include: {
        vitima: {
          include: {
            endereco: true,
          },
        },
        agressor: true,
        visitas: {
          include: {
            policial: {
              select: {
                id: true,
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
