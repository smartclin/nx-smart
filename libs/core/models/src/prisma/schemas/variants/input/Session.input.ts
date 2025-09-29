import { z } from 'zod';

// prettier-ignore
export const SessionInputSchema = z.object({
    id: z.string(),
    expiresAt: z.date(),
    token: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
    user: z.unknown(),
    impersonatedBy: z.string().optional().nullable()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
