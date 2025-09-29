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
export const WorkingDaysMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkingDaysMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysMaxAggregateInputType>;
export const WorkingDaysMaxAggregateInputObjectZodSchema = makeSchema();
