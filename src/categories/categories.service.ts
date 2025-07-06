import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return this.prismaService.category.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.category.findFirst({
      where: { UUID: id },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { UUID: id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return this.prismaService.category.update({
      where: { UUID: id },
      data: { deletedAt: new Date() },
    });
  }
}
