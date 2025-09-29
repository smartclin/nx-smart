import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullish(),
  username: z.string(),
  password: z.string(),
  phone: z.string(),
  birthDate: z.date().nullish(),
  gender: GenderSchema.nullish(),
  displayUsername: z.string().nullish(),
  twoFactorEnabled: z.boolean().nullish(),
  role: z.string().nullish(),
  banned: z.boolean().nullish(),
  banReason: z.string().nullish(),
  banExpires: z.date().nullish(),
  avatarId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = z.infer<typeof UserSchema>;
