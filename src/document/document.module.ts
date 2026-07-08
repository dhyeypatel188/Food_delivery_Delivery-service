import { Module } from '@nestjs/common';
import { DocumentRepository } from './document.repository';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
})
export class DocumentModule {}
