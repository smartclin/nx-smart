import { z } from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id', 'key', 'size', 'type', 'isPublic', 'userId', 'adminId', 'createdAt', 'updatedAt'])

export type FileScalarFieldEnum = z.infer<typeof FileScalarFieldEnumSchema>;