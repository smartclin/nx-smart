import { z } from 'zod';

import { ReminderMethodSchema } from '../../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../../enums/ReminderStatus.schema';
// prettier-ignore
export const ReminderInputSchema = z.object({
    id: z.string(),
    appointmentId: z.number().int(),
    appointment: z.unknown(),
    method: ReminderMethodSchema,
    sentAt: z.date(),
    status: ReminderStatusSchema
}).strict();

export type ReminderInputType = z.infer<typeof ReminderInputSchema>;
