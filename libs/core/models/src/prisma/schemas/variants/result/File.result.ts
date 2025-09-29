import { z } from 'zod';

import { FileTypeSchema } from '../../enums/FileType.schema';
// prettier-ignore
export const FileResultSchema = z.object({
    id: z.string(),
    key: z.string(),
    size: z.number().int(),
    type: FileTypeSchema,
    isPublic: z.boolean(),
    userId: z.string().nullable(),
    user: z.unknown().nullable(),
    admin: z.unknown().nullable(),
    adminId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    admins: z.array(z.unknown()),
    users: z.array(z.unknown())
}).strict();

export type FileResultType = z.infer<typeof FileResultSchema>;
