import { z } from 'zod';
export const BillingCreateResultSchema = z.object({
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
});