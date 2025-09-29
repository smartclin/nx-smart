import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    username: z.string(),
    password: z.string(),
    phone: z.string(),
    birthDate: z.date().nullable(),
    gender: GenderSchema.nullable(),
    displayUsername: z.string().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    Notification: z.array(z.unknown()),
    Staff: z.array(z.unknown()),
    Doctor: z.array(z.unknown()),
    Patient: z.array(z.unknown()),
    twoFactorEnabled: z.boolean().nullable(),
    role: z.string().nullable(),
    banned: z.boolean().nullable(),
    banReason: z.string().nullable(),
    banExpires: z.date().nullable(),
    twofactors: z.array(z.unknown()),
    avatarId: z.string().nullable(),
    avatar: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploads: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
