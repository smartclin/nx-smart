import { z } from 'zod';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';

export const BillingSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  appointmentId: z.number().int().nullish(),
  amount: z.number(),
  status: BillingStatusSchema.default("PENDING"),
  insurance: z.string().nullish(),
  insuranceId: z.string().nullish(),
  serviceDate: z.date(),
  dueDate: z.date(),
  paidDate: z.date().nullish(),
  notes: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BillingType = z.infer<typeof BillingSchema>;
