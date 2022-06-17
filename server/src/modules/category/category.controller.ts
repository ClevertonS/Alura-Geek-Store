import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('limit=:value')
  async findWithLimit(@Param('value') value: string) {
    return this.categoryService.findWithLimit(value);
  }

  @Post()
  async createProduct(@Body() data: CategoryDTO<ProductDTO>) {
    return this.categoryService.createCategory(data);
  }
}
