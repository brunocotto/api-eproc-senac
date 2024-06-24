import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('/agressors')
export class GetAllAgressorsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAllAgressors() {
    return this.prisma.agressor.findMany({
      include: {
        endereco: true,
      },
    });
  }
}
