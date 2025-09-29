import { z } from 'zod';

import { FeedingTypeSchema } from '../../enums/FeedingType.schema';
// prettier-ignore
export const FeedingLogModelSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    patient: z.unknown(),
    date: z.date(),
    type: FeedingTypeSchema,
    duration: z.number().int().nullable(),
    amount: z.number().nullable(),
    breast: z.string().nullable(),
    notes: z.string().nullable()
}).strict();

export type FeedingLogModelType = z.infer<typeof FeedingLogModelSchema>;
