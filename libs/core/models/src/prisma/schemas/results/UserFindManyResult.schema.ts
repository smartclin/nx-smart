import { z } from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  username: z.string(),
  password: z.string(),
  phone: z.string(),
  birthDate: z.date().optional(),
  gender: z.unknown().optional(),
  displayUsername: z.string().optional(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  Notification: z.array(z.unknown()),
  Staff: z.array(z.unknown()),
  Doctor: z.array(z.unknown()),
  Patient: z.array(z.unknown()),
  twoFactorEnabled: z.boolean().optional(),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.date().optional(),
  twofactors: z.array(z.unknown()),
  avatarId: z.string().optional(),
  avatar: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  uploads: z.array(z.unknown())
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