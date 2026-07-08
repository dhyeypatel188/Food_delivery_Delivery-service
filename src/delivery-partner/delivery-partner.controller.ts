import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DeliveryPartnerService } from './delivery-partner.service';
import { CreateDeliveryPartnerDto } from './dto/create-delivery-partner.dto';
import { UpdateDeliveryPartnerDto } from './dto/update-delivery-partner.dto';

@Controller('partners')
export class DeliveryPartnerController {
  constructor(private readonly deliveryPartnerService: DeliveryPartnerService) {}

  @Post()
  create(@Body() dto: CreateDeliveryPartnerDto) {
    return this.deliveryPartnerService.create(dto);
  }

  @Get()
  findAll(@Query('status') status?: string) {
    return this.deliveryPartnerService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryPartnerService.findOne(id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.deliveryPartnerService.findByUserId(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDeliveryPartnerDto) {
    return this.deliveryPartnerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryPartnerService.remove(id);
  }
}
