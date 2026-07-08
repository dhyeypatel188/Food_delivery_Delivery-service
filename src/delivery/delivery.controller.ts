import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('deliveries')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get('order/:orderId')
  getByOrder(@Param('orderId') orderId: string) {
    return this.deliveryService.getByOrderId(orderId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDeliveryDto) {
    return this.deliveryService.update(id, dto);
  }
}
