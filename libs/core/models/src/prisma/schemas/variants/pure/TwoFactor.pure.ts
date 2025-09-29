import { z } from 'zod';

// prettier-ignore
export const TwoFactorModelSchema = z.object({
    id: z.string(),
    secret: z.string(),
    backupCodes: z.string(),
    userId: z.string(),
    user: z.unknown()
}).strict();

export type TwoFactorModelType = z.infer<typeof TwoFactorModelSchema>;
