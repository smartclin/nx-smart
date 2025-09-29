import { z } from 'zod';
export const PaymentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  billId: z.number().int().optional(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  billDate: z.date(),
  paymentDate: z.date(),
  discount: z.number(),
  totalAmount: z.number(),
  amountPaid: z.number(),
  paymentMethod: z.unknown(),
  status: z.unknown(),
  receiptNumber: z.number().int(),
  appointment: z.unknown(),
  patient: z.unknown(),
  bills: z.array(z.unknown()),
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