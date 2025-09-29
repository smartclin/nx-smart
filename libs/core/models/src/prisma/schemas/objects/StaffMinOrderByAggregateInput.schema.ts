import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  img: SortOrderSchema.optional(),
  licenseNumber: SortOrderSchema.optional(),
  colorCode: SortOrderSchema.optional(),
  hireDate: SortOrderSchema.optional(),
  salary: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StaffMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StaffMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffMinOrderByAggregateInput>;
export const StaffMinOrderByAggregateInputObjectZodSchema = makeSchema();
