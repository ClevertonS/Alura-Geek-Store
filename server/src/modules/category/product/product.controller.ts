import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @IsPublic()
  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @IsPublic()
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Post()
  async createProduct(@Body() data: ProductDTO) {
    return this.productService.createProduct(data);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: ProductDTO) {
    return this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
