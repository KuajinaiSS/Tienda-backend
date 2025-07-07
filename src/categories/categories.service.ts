import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.prismaService.category.create({
      data: createCategoryDto,
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  async findOne(id: string): Promise<Category | null> {
    return await this.prismaService.category.findFirst({
      where: { UUID: id },
    });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.prismaService.category.update({
      where: { UUID: id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string): Promise<Category> {
    return await this.prismaService.category.update({
      where: { UUID: id },
      data: { deletedAt: new Date(), isActive: false },
    });
  }
}
