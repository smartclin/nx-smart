import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'username', 'password', 'phone', 'birthDate', 'gender', 'displayUsername', 'twoFactorEnabled', 'role', 'banned', 'banReason', 'banExpires', 'avatarId', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;