import { z } from 'zod';
export const PatientBillsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  billId: z.number().int(),
  serviceId: z.number().int(),
  serviceDate: z.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  service: z.unknown(),
  payment: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));