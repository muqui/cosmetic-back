import { Module } from '@nestjs/common';
import { ExitsService } from './exits.service';
import { ExitsController } from './exits.controller';

@Module({
  controllers: [ExitsController],
  providers: [ExitsService],
})
export class ExitsModule {}
