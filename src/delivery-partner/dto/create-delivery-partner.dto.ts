import { IsEnum, IsString } from 'class-validator';
import { VehicleType } from '@prisma/client';

export class CreateDeliveryPartnerDto {
  @IsString() user_id: string;
  @IsString() first_name: string;
  @IsString() last_name: string;
  @IsString() phone: string;
  @IsEnum(VehicleType) vehicle_type: VehicleType;
  @IsString() vehicle_number: string;
  @IsString() license_number: string;
}
