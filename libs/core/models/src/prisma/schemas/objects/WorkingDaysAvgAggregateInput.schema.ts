import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const WorkingDaysAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysAvgAggregateInputType>;
export const WorkingDaysAvgAggregateInputObjectZodSchema = makeSchema();
