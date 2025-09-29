import { z } from 'zod';

// prettier-ignore
export const AccountResultSchema = z.object({
    id: z.string(),
    accountId: z.string(),
    providerId: z.string(),
    userId: z.string(),
    user: z.unknown(),
    accessToken: z.string().nullable(),
    refreshToken: z.string().nullable(),
    idToken: z.string().nullable(),
    accessTokenExpiresAt: z.date().nullable(),
    refreshTokenExpiresAt: z.date().nullable(),
    scope: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AccountResultType = z.infer<typeof AccountResultSchema>;
