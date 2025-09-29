import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DiagnosisOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisOrderByRelationAggregateInput>;
export const DiagnosisOrderByRelationAggregateInputObjectZodSchema = makeSchema();
