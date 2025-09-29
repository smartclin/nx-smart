import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  salary: z.literal(true).optional()
}).strict();
export const StaffSumAggregateInputObjectSchema: z.ZodType<Prisma.StaffSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StaffSumAggregateInputType>;
export const StaffSumAggregateInputObjectZodSchema = makeSchema();
