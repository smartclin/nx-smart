import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  message: z.literal(true).optional(),
  type: z.literal(true).optional(),
  read: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const NotificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMaxAggregateInputType>;
export const NotificationMaxAggregateInputObjectZodSchema = makeSchema();
