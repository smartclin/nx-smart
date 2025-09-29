import { z } from 'zod';

import { FeedingTypeSchema } from '../../enums/FeedingType.schema';
// prettier-ignore
export const FeedingLogInputSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    date: z.date(),
    type: FeedingTypeSchema,
    duration: z.number().int().optional().nullable(),
    amount: z.number().optional().nullable(),
    breast: z.string().optional().nullable(),
    notes: z.string().optional().nullable()
}).strict();

export type FeedingLogInputType = z.infer<typeof FeedingLogInputSchema>;
