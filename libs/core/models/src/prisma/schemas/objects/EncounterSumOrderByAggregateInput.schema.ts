import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  medicalId: SortOrderSchema.optional()
}).strict();
export const EncounterSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EncounterSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterSumOrderByAggregateInput>;
export const EncounterSumOrderByAggregateInputObjectZodSchema = makeSchema();
