import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EarningRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(partnerId: string) {
    return this.prisma.earning.findMany({
      where: { partner_id: partnerId },
      orderBy: { created_at: 'desc' },
    });
  }

  async getSummary(partnerId: string) {
    const [total, unpaid] = await Promise.all([
      this.prisma.earning.aggregate({
        where: { partner_id: partnerId },
        _sum: { amount: true },
        _count: true,
      }),
      this.prisma.earning.aggregate({
        where: { partner_id: partnerId, is_paid: false },
        _sum: { amount: true },
        _count: true,
      }),
    ]);
    return {
      total_amount: total._sum.amount ?? 0,
      total_deliveries: total._count,
      unpaid_amount: unpaid._sum.amount ?? 0,
      unpaid_deliveries: unpaid._count,
    };
  }
}
