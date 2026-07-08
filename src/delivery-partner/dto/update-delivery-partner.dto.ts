import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { DeliveryPartnerStatus, VehicleType } from '@prisma/client';

export class UpdateDeliveryPartnerDto {
  @IsOptional() @IsString()  first_name?: string;
  @IsOptional() @IsString()  last_name?: string;
  @IsOptional() @IsString()  avatar?: string;
  @IsOptional() @IsString()  vehicle_number?: string;
  @IsOptional() @IsEnum(VehicleType) vehicle_type?: VehicleType;
  @IsOptional() @IsEnum(DeliveryPartnerStatus) status?: DeliveryPartnerStatus;
  @IsOptional() @IsNumber()  current_lat?: number;
  @IsOptional() @IsNumber()  current_lng?: number;
}
