import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

export const AdminSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  role: RoleSchema.default("ADMIN").nullish(),
  name: z.string(),
  phone: z.string(),
  birthDate: z.date().nullish(),
  avatarId: z.string().nullish(),
  isRoot: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AdminType = z.infer<typeof AdminSchema>;
