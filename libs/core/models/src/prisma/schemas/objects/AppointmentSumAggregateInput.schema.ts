import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  serviceId: z.literal(true).optional()
}).strict();
export const AppointmentSumAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentSumAggregateInputType>;
export const AppointmentSumAggregateInputObjectZodSchema = makeSchema();
