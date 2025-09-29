import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  appointmentDate: z.literal(true).optional(),
  time: z.literal(true).optional(),
  status: z.literal(true).optional(),
  type: z.literal(true).optional(),
  note: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AppointmentMinAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentMinAggregateInputType>;
export const AppointmentMinAggregateInputObjectZodSchema = makeSchema();
