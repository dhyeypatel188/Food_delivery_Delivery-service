import { Module } from '@nestjs/common';
import { EarningRepository } from './earning.repository';
import { EarningService } from './earning.service';
import { EarningController } from './earning.controller';

@Module({
  controllers: [EarningController],
  providers: [EarningService, EarningRepository],
})
export class EarningModule {}
