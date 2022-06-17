import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { ProductDTO } from './product/product.dto';
import { CategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.category.findMany({
      include: {
        Products: true,
      },
    });
  }

  async findWithLimit(value: string) {
    const takeValue = parseInt(value);
    return await this.prisma.category.findMany({
      include: {
        Products: {
          take: takeValue,
        },
      },
    });
  }

  async createCategory(data: CategoryDTO<ProductDTO>) {
    const category = this.prisma.category.create({
      data,
    });
    return category;
  }
}
