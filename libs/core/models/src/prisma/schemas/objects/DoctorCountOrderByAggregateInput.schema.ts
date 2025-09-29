import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  specialization: SortOrderSchema.optional(),
  licenseNumber: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  img: SortOrderSchema.optional(),
  colorCode: SortOrderSchema.optional(),
  availabilityStatus: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DoctorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DoctorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCountOrderByAggregateInput>;
export const DoctorCountOrderByAggregateInputObjectZodSchema = makeSchema();
