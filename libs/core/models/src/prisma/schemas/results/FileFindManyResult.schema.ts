import { z } from 'zod';
export const FileFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  key: z.string(),
  size: z.number().int(),
  type: z.unknown(),
  isPublic: z.boolean(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  admin: z.unknown().optional(),
  adminId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  admins: z.array(z.unknown()),
  users: z.array(z.unknown())
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