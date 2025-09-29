import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const EncounterOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EncounterOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterOrderByRelationAggregateInput>;
export const EncounterOrderByRelationAggregateInputObjectZodSchema = makeSchema();
