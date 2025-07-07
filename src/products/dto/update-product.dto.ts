// import { PartialType } from '@nestjs/mapped-types';

import { Product } from '@prisma/client';

export type UpdateProductDto = Omit<
  Product,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
