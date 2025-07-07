// export class CreateProductDto {}

import { Product } from '@prisma/client';

export type CreateProductDto = Omit<
  Product,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isActive'
>;
