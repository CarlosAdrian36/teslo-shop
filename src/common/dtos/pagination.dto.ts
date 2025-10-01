import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConversions : True
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitConversions : True
  offset?: number;
}
