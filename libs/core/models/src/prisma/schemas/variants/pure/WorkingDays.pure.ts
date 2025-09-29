import { z } from 'zod';

// prettier-ignore
export const WorkingDaysModelSchema = z.object({
    id: z.number().int(),
    doctorId: z.string(),
    day: z.string(),
    startTime: z.string(),
    closeTime: z.string(),
    doctor: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkingDaysModelType = z.infer<typeof WorkingDaysModelSchema>;
