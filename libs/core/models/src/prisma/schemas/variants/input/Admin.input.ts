import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const AdminInputSchema = z.object({
    id: z.string(),
    username: z.string(),
    password: z.string(),
    role: RoleSchema.optional().nullable(),
    name: z.string(),
    phone: z.string(),
    birthDate: z.date().optional().nullable(),
    avatarId: z.string().optional().nullable(),
    avatar: z.unknown().optional().nullable(),
    isRoot: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploads: z.array(z.unknown())
}).strict();

export type AdminInputType = z.infer<typeof AdminInputSchema>;
