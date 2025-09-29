import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const AppointmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentAvgAggregateInputType>;
export const AppointmentAvgAggregateInputObjectZodSchema = makeSchema();
