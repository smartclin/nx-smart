import { z } from 'zod';
export const BillingFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  appointmentId: z.number().int().optional(),
  appointment: z.unknown().optional(),
  amount: z.number(),
  status: z.unknown(),
  insurance: z.string().optional(),
  insuranceId: z.string().optional(),
  serviceDate: z.date(),
  dueDate: z.date(),
  paidDate: z.date().optional(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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