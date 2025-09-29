import { z } from 'zod';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema';

export const AppointmentSchema = z.object({
  id: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  serviceId: z.number().int().nullish(),
  appointmentDate: z.date(),
  time: z.string(),
  status: AppointmentStatusSchema.default("PENDING").nullish(),
  type: z.string(),
  note: z.string().nullish(),
  reason: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AppointmentType = z.infer<typeof AppointmentSchema>;
