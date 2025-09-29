import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  key: z.literal(true).optional(),
  size: z.literal(true).optional(),
  type: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  adminId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const FileMinAggregateInputObjectSchema: z.ZodType<Prisma.FileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileMinAggregateInputType>;
export const FileMinAggregateInputObjectZodSchema = makeSchema();
