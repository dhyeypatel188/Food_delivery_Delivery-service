import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(partnerId: string, dto: CreateDocumentDto) {
    return this.prisma.partner_Document.create({
      data: { partner_id: partnerId, ...dto },
    });
  }

  async findAll(partnerId: string) {
    return this.prisma.partner_Document.findMany({
      where: { partner_id: partnerId },
      orderBy: { created_at: 'desc' },
    });
  }

  async findById(id: string) {
    return this.prisma.partner_Document.findUnique({ where: { id } });
  }

  async markVerified(id: string, verified: boolean) {
    return this.prisma.partner_Document.update({
      where: { id },
      data: { verified },
    });
  }

  async delete(id: string) {
    return this.prisma.partner_Document.delete({ where: { id } });
  }
}
