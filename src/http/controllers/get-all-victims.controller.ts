import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('/victims')
export class GetAllVictimsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAllVictims() {
    return this.prisma.vitima.findMany({
      include: {
        endereco: true,
      },
    });
  }
}
