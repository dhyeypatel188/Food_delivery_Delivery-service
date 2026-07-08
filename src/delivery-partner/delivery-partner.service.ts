import { Injectable, NotFoundException } from '@nestjs/common';
import { DeliveryPartnerRepository } from './delivery-partner.repository';
import { CreateDeliveryPartnerDto } from './dto/create-delivery-partner.dto';
import { UpdateDeliveryPartnerDto } from './dto/update-delivery-partner.dto';

@Injectable()
export class DeliveryPartnerService {
  constructor(private readonly deliveryPartnerRepository: DeliveryPartnerRepository) {}

  async create(dto: CreateDeliveryPartnerDto) {
    return this.deliveryPartnerRepository.create(dto);
  }

  async findAll(status?: string) {
    return this.deliveryPartnerRepository.findMany(status);
  }

  async findOne(id: string) {
    const partner = await this.deliveryPartnerRepository.findUnique(id);
    if (!partner) throw new NotFoundException('Delivery partner not found');
    return partner;
  }

  async findByUserId(userId: string) {
    const partner = await this.deliveryPartnerRepository.findByUserId(userId);
    if (!partner) throw new NotFoundException('Delivery partner not found');
    return partner;
  }

  async update(id: string, dto: UpdateDeliveryPartnerDto) {
    await this.findOne(id);
    return this.deliveryPartnerRepository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.deliveryPartnerRepository.deactivate(id);
    return { message: 'Delivery partner deactivated' };
  }
}
