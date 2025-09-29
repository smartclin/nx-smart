import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  day: z.literal(true).optional(),
  startTime: z.literal(true).optional(),
  closeTime: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WorkingDaysMinAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysMinAggregateInputType>;
export const WorkingDaysMinAggregateInputObjectZodSchema = makeSchema();
