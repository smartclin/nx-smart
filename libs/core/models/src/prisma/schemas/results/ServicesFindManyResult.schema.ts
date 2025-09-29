import { z } from 'zod';
export const ServicesFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  labtests: z.array(z.unknown()),
  bills: z.array(z.unknown()),
  category: z.unknown().optional(),
  duration: z.number().int().optional(),
  isAvailable: z.boolean(),
  appointments: z.array(z.unknown()),
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