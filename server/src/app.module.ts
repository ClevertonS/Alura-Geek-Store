import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [ProductModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
