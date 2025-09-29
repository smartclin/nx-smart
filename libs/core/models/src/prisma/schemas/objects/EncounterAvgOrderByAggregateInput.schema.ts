import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  medicalId: SortOrderSchema.optional()
}).strict();
export const EncounterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EncounterAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterAvgOrderByAggregateInput>;
export const EncounterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
