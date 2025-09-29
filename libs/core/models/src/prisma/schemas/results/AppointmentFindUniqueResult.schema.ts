import { z } from 'zod';
export const AppointmentFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  serviceId: z.number().int().optional(),
  appointmentDate: z.date(),
  time: z.string(),
  status: z.unknown().optional(),
  type: z.string(),
  note: z.string().optional(),
  patient: z.unknown(),
  doctor: z.unknown(),
  service: z.unknown().optional(),
  bills: z.array(z.unknown()),
  medical: z.array(z.unknown()),
  reminders: z.array(z.unknown()),
  reason: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Billing: z.array(z.unknown())
}));