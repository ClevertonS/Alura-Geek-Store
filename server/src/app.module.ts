import { Module } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/category/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [ProductModule, CategoryModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    PrismaClient,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
