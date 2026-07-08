import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@Controller('partners/:partnerId/documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  upload(@Param('partnerId') partnerId: string, @Body() dto: CreateDocumentDto) {
    return this.documentService.upload(partnerId, dto);
  }

  @Get()
  findAll(@Param('partnerId') partnerId: string) {
    return this.documentService.getAll(partnerId);
  }

  @Patch(':docId/verify')
  verify(@Param('docId') docId: string, @Body('verified') verified: boolean) {
    return this.documentService.verify(docId, verified);
  }

  @Delete(':docId')
  remove(@Param('docId') docId: string) {
    return this.documentService.remove(docId);
  }
}
