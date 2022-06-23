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

  async findById(id: string) {
    const intId = parseInt(id);
    return await this.prisma.category.findUnique({
      where: {
        id: intId,
      },
      include: {
        Products: true,
      },
    });
  }

  async findByIdWithProductLimit(id: string, limit: string) {
    const intId = parseInt(id);
    const takeValue = parseInt(limit);
    return await this.prisma.category.findUnique({
      where: {
        id: intId,
      },
      include: {
        Products: {
          take: takeValue,
        },
      },
    });
  }

  async findWithProductLimit(value: string) {
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
