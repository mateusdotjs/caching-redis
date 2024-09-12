import { faker } from '@faker-js/faker';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async onApplicationBootstrap() {
    console.log('Seeding database...');
    await this.seed();
    console.log('Database seeded!');
  }

  async seed() {
    const productsToCreate = [];

    for (let i = 0; i < 20; i++) {
      const product = this.productsRepository.create({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
      });

      productsToCreate.push(product);
    }

    return await this.productsRepository.save(productsToCreate);
  }
}
