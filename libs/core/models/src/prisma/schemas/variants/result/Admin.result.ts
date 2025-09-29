import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const AdminResultSchema = z.object({
    id: z.string(),
    username: z.string(),
    password: z.string(),
    role: RoleSchema.nullable(),
    name: z.string(),
    phone: z.string(),
    birthDate: z.date().nullable(),
    avatarId: z.string().nullable(),
    avatar: z.unknown().nullable(),
    isRoot: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploads: z.array(z.unknown())
}).strict();

export type AdminResultType = z.infer<typeof AdminResultSchema>;
