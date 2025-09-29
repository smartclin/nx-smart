import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  serviceName: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  category: z.literal(true).optional(),
  duration: z.literal(true).optional(),
  isAvailable: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ServicesCountAggregateInputObjectSchema: z.ZodType<Prisma.ServicesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCountAggregateInputType>;
export const ServicesCountAggregateInputObjectZodSchema = makeSchema();
