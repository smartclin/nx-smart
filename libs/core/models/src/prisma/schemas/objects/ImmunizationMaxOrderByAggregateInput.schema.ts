import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  vaccine: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  dose: SortOrderSchema.optional(),
  lotNumber: SortOrderSchema.optional(),
  administeredByStaffId: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ImmunizationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImmunizationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationMaxOrderByAggregateInput>;
export const ImmunizationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
