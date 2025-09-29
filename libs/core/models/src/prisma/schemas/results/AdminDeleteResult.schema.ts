import { z } from 'zod';
export const AdminDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  role: z.unknown().optional(),
  name: z.string(),
  phone: z.string(),
  birthDate: z.date().optional(),
  avatarId: z.string().optional(),
  avatar: z.unknown().optional(),
  isRoot: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  uploads: z.array(z.unknown())
}));