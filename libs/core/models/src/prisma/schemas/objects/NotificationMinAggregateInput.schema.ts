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
export const NotificationMinAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinAggregateInputType>;
export const NotificationMinAggregateInputObjectZodSchema = makeSchema();
