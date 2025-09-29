import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const LabTestAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LabTestAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestAvgOrderByAggregateInput>;
export const LabTestAvgOrderByAggregateInputObjectZodSchema = makeSchema();
