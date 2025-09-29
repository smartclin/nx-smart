import { z } from 'zod';
export const StaffFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  userId: z.string(),
  user: z.unknown(),
  address: z.string(),
  department: z.string().optional(),
  img: z.string().optional(),
  licenseNumber: z.string().optional(),
  colorCode: z.string().optional(),
  hireDate: z.date().optional(),
  salary: z.number().optional(),
  role: z.unknown(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  immunizations: z.array(z.unknown()),
  GrowthChart: z.array(z.unknown())
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