import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  medicalRecordId: SortOrderSchema.optional()
}).strict();
export const PrescriptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PrescriptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionAvgOrderByAggregateInput>;
export const PrescriptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
