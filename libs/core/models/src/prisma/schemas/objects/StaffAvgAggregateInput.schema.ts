import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  salary: z.literal(true).optional()
}).strict();
export const StaffAvgAggregateInputObjectSchema: z.ZodType<Prisma.StaffAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StaffAvgAggregateInputType>;
export const StaffAvgAggregateInputObjectZodSchema = makeSchema();
