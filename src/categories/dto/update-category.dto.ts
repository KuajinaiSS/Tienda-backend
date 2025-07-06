// import { PartialType } from '@nestjs/mapped-types';

import { Category } from 'generated/prisma';

export type UpdateCategoryDto = Omit<
  Category,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
