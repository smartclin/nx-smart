import { z } from 'zod';

// prettier-ignore
export const VerificationModelSchema = z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.date(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
}).strict();

export type VerificationModelType = z.infer<typeof VerificationModelSchema>;
