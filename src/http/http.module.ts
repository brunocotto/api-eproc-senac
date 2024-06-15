import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateProtectiveMeasureController } from './controllers/create-protective-measure.controller';
import { CreateAggressorController } from './controllers/create-aggressor.controller';
import { CreateVictimController } from './controllers/create-victim.controller';
import { CreatePoliceOfficerController } from './controllers/create-police-officer.controller';
import { CreateVisitController } from './controllers/create-visit.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateProtectiveMeasureController,
    CreateAggressorController,
    CreateVictimController,
    CreatePoliceOfficerController,
    CreateVisitController,
  ],
})
export class HttpModule {}
