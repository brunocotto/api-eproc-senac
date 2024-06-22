import { BadRequestException, Controller, Get, HttpCode } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller('/visits')
export class GetAllVisitsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @HttpCode(200)
  async handle() {
    try {
      const visits = await this.prisma.visita.findMany();
      return visits;
    } catch (error) {
      throw new BadRequestException(
        'An error occurred while fetching the visits.',
      );
    }
  }
}
