import { PrismaService } from './../../database/prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/police-officers')
export class GetAllPoliceOfficersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async handle() {
    return this.prisma.policial.findMany({
      include: {
        endereco: true,
        visitas: true,
      },
    });
  }
}
