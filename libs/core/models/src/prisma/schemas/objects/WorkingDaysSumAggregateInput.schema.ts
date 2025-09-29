import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const WorkingDaysSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysSumAggregateInputType>;
export const WorkingDaysSumAggregateInputObjectZodSchema = makeSchema();
