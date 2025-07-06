// import { PartialType } from '@nestjs/mapped-types';

import { Product } from 'generated/prisma';

export type UpdateProductDto = Omit<
  Product,
  'UUID' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
