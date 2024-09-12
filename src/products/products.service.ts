import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  getAll() {
    return this.productsRepository.find();
  }

  async create(createProductDto: CreateProductDto) {
    const productToSave = this.productsRepository.create(createProductDto);
    const savedProduct = await this.productsRepository.save(productToSave);
    const productCache = await this.cacheManager.get('products');
    if (productCache) await this.cacheManager.del('products');
    return savedProduct;
  }

  async update(updateProductDto: UpdateProductDto) {
    const productId = updateProductDto.id;
    const productToUpdate = await this.productsRepository.findOneBy({
      id: productId,
    });
    Object.assign(productToUpdate, updateProductDto);
    const updatedProduct = await this.productsRepository.save(productToUpdate);
    await this.cacheManager.del('products');
    return updatedProduct;
  }

  async destroy(id: number) {
    await this.cacheManager.del('products');
    return this.productsRepository.delete(id);
  }
}
