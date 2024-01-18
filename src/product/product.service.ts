import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(product: CreateProductDto) {
    return await this.productRepository.create(product);
  }

  async findAllProducts() {
    return await this.productRepository.findAll();
  }

  async findOneProduct(id: string) {
    return await this.productRepository.findById(id);
  }

  async updateProduct(id: string, product: CreateProductDto) {
    return await this.productRepository.findByIdAndUpdate(id, product);
  }

  async deleteProduct(id: string) {
    return await this.productRepository.deleteOne(id);
  }
}
