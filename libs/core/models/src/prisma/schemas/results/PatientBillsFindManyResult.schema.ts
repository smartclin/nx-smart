import { z } from 'zod';
export const PatientBillsFindManyResultSchema = z.object({
  data: z.array(z.object({
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