import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  price: z.literal(true).optional(),
  duration: z.literal(true).optional()
}).strict();
export const ServicesAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServicesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServicesAvgAggregateInputType>;
export const ServicesAvgAggregateInputObjectZodSchema = makeSchema();
