import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('/police-officers')
export class GetPoliceOfficerByIdController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAll() {
    return this.prisma.policial.findMany({
      include: {
        endereco: true,
        visitas: true,
      },
    });
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const officer = await this.prisma.policial.findUnique({
      where: { id: Number(id) },
      include: {
        endereco: true,
        visitas: true,
      },
    });

    if (!officer) {
      throw new NotFoundException('Police officer not found');
    }

    return officer;
  }
}
