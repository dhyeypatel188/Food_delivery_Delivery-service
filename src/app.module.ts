import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DeliveryPartnerModule } from './delivery-partner/delivery-partner.module';
import { DocumentModule } from './document/document.module';
import { EarningModule } from './earning/earning.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    DeliveryPartnerModule,
    DocumentModule,
    EarningModule,
    DeliveryModule,
  ],
})
export class AppModule {}

