import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductDTO } from './product/product.dto';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @IsPublic()
  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @IsPublic()
  @Get('filter?')
  async findByIdWithProductLimit(
    @Query('id') id: string,
    @Query('limit') limit?: string,
  ) {
    return this.categoryService.findByIdWithProductLimit(id, limit);
  }

  @IsPublic()
  @Get(':id/allproducts')
  async findById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @IsPublic()
  @Get('limit=:value')
  async findWithProductLimit(@Param('value') value: string) {
    return this.categoryService.findWithProductLimit(value);
  }

  @IsPublic()
  @Post()
  async createProduct(@Body() data: CategoryDTO<ProductDTO>) {
    return this.categoryService.createCategory(data);
  }
}
