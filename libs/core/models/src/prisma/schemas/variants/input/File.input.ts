import { z } from 'zod';

import { FileTypeSchema } from '../../enums/FileType.schema';
// prettier-ignore
export const FileInputSchema = z.object({
    id: z.string(),
    key: z.string(),
    size: z.number().int(),
    type: FileTypeSchema,
    isPublic: z.boolean(),
    userId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    admin: z.unknown().optional().nullable(),
    adminId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    admins: z.array(z.unknown()),
    users: z.array(z.unknown())
}).strict();

export type FileInputType = z.infer<typeof FileInputSchema>;
