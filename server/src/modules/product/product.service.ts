import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findById(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct(data: ProductDTO) {
    const product = this.prisma.product.create({
      data,
    });
    return product;
  }

  async updateProduct(id: string, data: ProductDTO) {
    return await this.prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
