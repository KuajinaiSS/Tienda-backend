// export class CreateCategoryDto {}

import { Category } from 'generated/prisma';

export type CreateCategoryDto = Omit<
  Category,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isActive'
>;
