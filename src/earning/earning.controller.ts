import { Controller, Get, Param } from '@nestjs/common';
import { EarningService } from './earning.service';

@Controller('partners/:partnerId/earnings')
export class EarningController {
  constructor(private readonly earningService: EarningService) {}

  @Get()
  findAll(@Param('partnerId') partnerId: string) {
    return this.earningService.getAll(partnerId);
  }

  @Get('summary')
  getSummary(@Param('partnerId') partnerId: string) {
    return this.earningService.getSummary(partnerId);
  }
}
