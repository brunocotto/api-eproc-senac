import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateProtectiveMeasureController } from './controllers/create-protective-measure.controller';
import { CreateAggressorController } from './controllers/create-aggressor.controller';
import { CreateVictimController } from './controllers/create-victim.controller';
import { CreatePoliceOfficerController } from './controllers/create-police-officer.controller';
import { CreateVisitController } from './controllers/create-visit.controller';
import { GetAllVisitsController } from './controllers/get-all-visits.controller';
import { UpdateVisitController } from './controllers/update-visit.controller';
import { GetAllProtectiveMeasuresController } from './controllers/get-all-protective-measures.controller';
import { GetAllAgressorsController } from './controllers/get-all-agressors.controller';
import { GetAllVictimsController } from './controllers/get-all-victims.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateProtectiveMeasureController,
    CreateAggressorController,
    CreateVictimController,
    CreatePoliceOfficerController,
    CreateVisitController,
    GetAllProtectiveMeasuresController,
    GetAllVisitsController,
    UpdateVisitController,
    GetAllAgressorsController,
    GetAllVictimsController,
  ],
})
export class HttpModule {}
