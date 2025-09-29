import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const FileAvgAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAvgAggregateInputType>;
export const FileAvgAggregateInputObjectZodSchema = makeSchema();
