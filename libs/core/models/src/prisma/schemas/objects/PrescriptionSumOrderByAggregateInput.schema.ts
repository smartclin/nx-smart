import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  medicalRecordId: SortOrderSchema.optional()
}).strict();
export const PrescriptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PrescriptionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionSumOrderByAggregateInput>;
export const PrescriptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
