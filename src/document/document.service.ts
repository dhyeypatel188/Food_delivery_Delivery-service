import { Injectable, NotFoundException } from '@nestjs/common';
import { DocumentRepository } from './document.repository';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async upload(partnerId: string, dto: CreateDocumentDto) {
    return this.documentRepository.create(partnerId, dto);
  }

  async getAll(partnerId: string) {
    return this.documentRepository.findAll(partnerId);
  }

  async verify(id: string, verified: boolean) {
    const doc = await this.documentRepository.findById(id);
    if (!doc) throw new NotFoundException('Document not found');
    return this.documentRepository.markVerified(id, verified);
  }

  async remove(id: string) {
    const doc = await this.documentRepository.findById(id);
    if (!doc) throw new NotFoundException('Document not found');
    await this.documentRepository.delete(id);
    return { message: 'Document deleted' };
  }
}
