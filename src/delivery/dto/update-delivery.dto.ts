import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDeliveryDto {
  @IsOptional() @IsNumber() partner_rating?: number;
  @IsOptional() @IsString() partner_note?: string;
  @IsOptional() @IsNumber() distance_km?: number;
}
