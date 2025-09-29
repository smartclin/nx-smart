import { z } from 'zod';
export const AppointmentFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});