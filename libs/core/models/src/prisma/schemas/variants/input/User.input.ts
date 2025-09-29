import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    username: z.string(),
    password: z.string(),
    phone: z.string(),
    birthDate: z.date().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    displayUsername: z.string().optional().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    Notification: z.array(z.unknown()),
    Staff: z.array(z.unknown()),
    Doctor: z.array(z.unknown()),
    Patient: z.array(z.unknown()),
    twoFactorEnabled: z.boolean().optional().nullable(),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.date().optional().nullable(),
    twofactors: z.array(z.unknown()),
    avatarId: z.string().optional().nullable(),
    avatar: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploads: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
