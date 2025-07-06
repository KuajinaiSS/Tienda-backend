// export class CreateProductDto {}

import { Product } from 'generated/prisma';

export type CreateProductDto = Omit<
  Product,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isActive'
>;
