import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  medicalId: z.literal(true).optional()
}).strict();
export const EncounterSumAggregateInputObjectSchema: z.ZodType<Prisma.EncounterSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EncounterSumAggregateInputType>;
export const EncounterSumAggregateInputObjectZodSchema = makeSchema();
