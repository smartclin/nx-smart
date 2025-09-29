import { z } from 'zod';

export const PatientBillsSchema = z.object({
  id: z.number().int(),
  billId: z.number().int(),
  serviceId: z.number().int(),
  serviceDate: z.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PatientBillsType = z.infer<typeof PatientBillsSchema>;
