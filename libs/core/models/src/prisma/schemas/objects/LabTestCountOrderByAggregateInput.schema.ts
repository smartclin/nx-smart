import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  testDate: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const LabTestCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LabTestCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCountOrderByAggregateInput>;
export const LabTestCountOrderByAggregateInputObjectZodSchema = makeSchema();
