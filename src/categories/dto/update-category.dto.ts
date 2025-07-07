// import { PartialType } from '@nestjs/mapped-types';

import { Category } from '@prisma/client';

export type UpdateCategoryDto = Omit<
  Category,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
