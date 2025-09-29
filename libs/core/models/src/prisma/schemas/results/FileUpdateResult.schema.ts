import { z } from 'zod';
export const FileUpdateResultSchema = z.nullable(z.object({
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
}));