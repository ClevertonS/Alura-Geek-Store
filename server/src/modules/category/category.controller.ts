import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDTO } from '../product/product.dto';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Post()
  async createProduct(@Body() data: CategoryDTO<ProductDTO>) {
    return this.categoryService.createCategory(data);
  }
}
