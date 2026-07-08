import { Module } from '@nestjs/common';
import { DeliveryRepository } from './delivery.repository';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryRepository],
})
export class DeliveryModule {}
