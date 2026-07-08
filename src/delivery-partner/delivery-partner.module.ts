import { Module } from '@nestjs/common';
import { DeliveryPartnerController } from './delivery-partner.controller';
import { DeliveryPartnerService } from './delivery-partner.service';
import { DeliveryPartnerRepository } from './delivery-partner.repository';

@Module({
  controllers: [DeliveryPartnerController],
  providers: [DeliveryPartnerService, DeliveryPartnerRepository],
})
export class DeliveryPartnerModule {}
