import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber()
  price: number;

  @IsString()
  description: string;

  slug: string;
}
