import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederModule } from './database/seeder/seeder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', //Nome do serviço no docker-compose
      port: 5432,
      username: 'root',
      password: '123456',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true, //Auto criar tabelas na inicialização, não usar em produção
    }),
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379,
      isGlobal: true,
    }),
    ProductsModule,
    SeederModule,
  ],
})
export class AppModule {}
