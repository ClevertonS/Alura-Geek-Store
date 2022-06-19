import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductDTO } from './product/product.dto';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get('filter?')
  async findByIdWithProductLimit(
    @Query('id') id: string,
    @Query('limit') limit: string,
  ) {
    return this.categoryService.findByIdWithProductLimit(id, limit);
  }

  @Get('limit=:value')
  async findWithProductLimit(@Param('value') value: string) {
    return this.categoryService.findWithProductLimit(value);
  }

  @Post()
  async createProduct(@Body() data: CategoryDTO<ProductDTO>) {
    return this.categoryService.createCategory(data);
  }
}
