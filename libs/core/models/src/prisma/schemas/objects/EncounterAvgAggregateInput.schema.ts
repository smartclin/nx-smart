import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  medicalId: z.literal(true).optional()
}).strict();
export const EncounterAvgAggregateInputObjectSchema: z.ZodType<Prisma.EncounterAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EncounterAvgAggregateInputType>;
export const EncounterAvgAggregateInputObjectZodSchema = makeSchema();
