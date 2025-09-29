import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const FileSumAggregateInputObjectSchema: z.ZodType<Prisma.FileSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileSumAggregateInputType>;
export const FileSumAggregateInputObjectZodSchema = makeSchema();
