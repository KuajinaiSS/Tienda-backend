// export class CreateCategoryDto {}

import { Category } from '@prisma/client';

export type CreateCategoryDto = Omit<
  Category,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isActive'
>;
