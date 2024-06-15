import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateProtectiveMeasureController } from './controllers/create-protective-measure.controller';
import { CreateAggressorController } from './controllers/create- aggressor.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateProtectiveMeasureController, CreateAggressorController],
})
export class HttpModule {}
