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
  updatedAt: z.literal(true).optional()
}).strict();
export const ServicesMinAggregateInputObjectSchema: z.ZodType<Prisma.ServicesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServicesMinAggregateInputType>;
export const ServicesMinAggregateInputObjectZodSchema = makeSchema();
