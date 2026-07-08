import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByOrderId(orderId: string) {
    return this.prisma.delivery.findUnique({
      where: { order_id: orderId },
      include: { partner: true, order: true },
    });
  }

  async findById(id: string) {
    return this.prisma.delivery.findUnique({
      where: { id },
      include: { partner: true, order: true },
    });
  }

  async update(id: string, dto: UpdateDeliveryDto) {
    return this.prisma.delivery.update({
      where: { id },
      data: dto,
    });
  }
}
