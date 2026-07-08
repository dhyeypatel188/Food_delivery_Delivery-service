import { Injectable, NotFoundException } from '@nestjs/common';
import { DeliveryRepository } from './delivery.repository';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async getByOrderId(orderId: string) {
    const delivery = await this.deliveryRepository.findByOrderId(orderId);
    if (!delivery) throw new NotFoundException('Delivery record not found');
    return delivery;
  }

  async update(id: string, dto: UpdateDeliveryDto) {
    const delivery = await this.deliveryRepository.findById(id);
    if (!delivery) throw new NotFoundException('Delivery record not found');
    return this.deliveryRepository.update(id, dto);
  }
}
