import { Injectable } from '@nestjs/common';
import { EarningRepository } from './earning.repository';

@Injectable()
export class EarningService {
  constructor(private readonly earningRepository: EarningRepository) {}

  async getAll(partnerId: string) {
    return this.earningRepository.findAll(partnerId);
  }

  async getSummary(partnerId: string) {
    return this.earningRepository.getSummary(partnerId);
  }
}
