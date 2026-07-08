import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryPartnerDto } from './dto/create-delivery-partner.dto';
import { UpdateDeliveryPartnerDto } from './dto/update-delivery-partner.dto';

@Injectable()
export class DeliveryPartnerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDeliveryPartnerDto) {
    return this.prisma.deliveryPartner.create({ data: dto });
  }

  async findMany(status?: any) {
    return this.prisma.deliveryPartner.findMany({
      where: { ...(status && { status }), is_active: true },
      include: { user: { select: { email: true } } },
    });
  }

  async findUnique(id: string) {
    return this.prisma.deliveryPartner.findUnique({
      where: { id },
      include: { user: { select: { email: true } }, deliveries: true },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.deliveryPartner.findUnique({
      where: { user_id: userId },
      include: { user: { select: { email: true } }, deliveries: true },
    });
  }

  async update(id: string, dto: UpdateDeliveryPartnerDto) {
    return this.prisma.deliveryPartner.update({
      where: { id },
      data: dto,
    });
  }

  async deactivate(id: string) {
    return this.prisma.deliveryPartner.update({
      where: { id },
      data: { is_active: false },
    });
  }
}
