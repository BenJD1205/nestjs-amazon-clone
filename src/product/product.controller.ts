import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import slugify from 'slugify';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller({ version: '1', path: 'products' })
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() productDto: CreateProductDto) {
    return await this.productService.createProduct({
      ...productDto,
      slug: slugify(productDto.name),
    });
  }

  @Get()
  async findAllProducts() {
    return await this.productService.findAllProducts();
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return await this.productService.findOneProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: CreateProductDto,
  ) {
    return await this.productService.updateProduct(id, productDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
