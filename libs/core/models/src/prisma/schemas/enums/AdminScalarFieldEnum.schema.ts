import { z } from 'zod';

export const AdminScalarFieldEnumSchema = z.enum(['id', 'username', 'password', 'role', 'name', 'phone', 'birthDate', 'avatarId', 'isRoot', 'createdAt', 'updatedAt'])

export type AdminScalarFieldEnum = z.infer<typeof AdminScalarFieldEnumSchema>;