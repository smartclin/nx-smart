import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  doctorId: z.string(),
  serviceId: z.number().int().optional().nullable(),
  appointmentDate: z.coerce.date(),
  time: z.string(),
  status: AppointmentStatusSchema.optional().nullable(),
  type: z.string(),
  note: z.string().optional().nullable(),
  reason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AppointmentCreateManyPatientInputObjectSchema: z.ZodType<Prisma.AppointmentCreateManyPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateManyPatientInput>;
export const AppointmentCreateManyPatientInputObjectZodSchema = makeSchema();
