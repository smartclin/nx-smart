import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional()
}).strict();
export const DiagnosisSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisSumOrderByAggregateInput>;
export const DiagnosisSumOrderByAggregateInputObjectZodSchema = makeSchema();
