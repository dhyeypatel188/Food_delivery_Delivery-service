import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString() type: string;      // e.g. 'AADHAR', 'LICENSE', 'RC_BOOK'
  @IsString() file_url: string;
  @IsOptional() @IsBoolean() verified?: boolean;
}
