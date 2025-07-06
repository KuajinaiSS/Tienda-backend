import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { categoryUUID, description, discount, image, name, price } =
      createProductDto;

    // Existe un UUID de categoria
    const existCategory = await this.prismaService.category.findFirst({
      where: { UUID: categoryUUID },
    });
    if (!existCategory) {
      throw new NotFoundException('La categoría especificada no existe');
    }

    return this.prismaService.product.create({
      data: { categoryUUID, description, discount, image, name, price },
    });
  }

  async findAll() {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.product.findFirst({
      where: { UUID: id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.prismaService.product.update({
      where: { UUID: id },
      data: { ...updateProductDto, updatedAt: new Date() },
    });
  }

  async remove(id: string) {
    return await this.prismaService.product.update({
      where: { UUID: id },
      data: { isActive: false, deletedAt: new Date() },
    });
  }
}
