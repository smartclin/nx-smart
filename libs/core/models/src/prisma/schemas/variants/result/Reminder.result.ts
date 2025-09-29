import { z } from 'zod';

import { ReminderMethodSchema } from '../../enums/ReminderMethod.schema';
import { ReminderStatusSchema } from '../../enums/ReminderStatus.schema';
// prettier-ignore
export const ReminderResultSchema = z.object({
    id: z.string(),
    appointmentId: z.number().int(),
    appointment: z.unknown(),
    method: ReminderMethodSchema,
    sentAt: z.date(),
    status: ReminderStatusSchema
}).strict();

export type ReminderResultType = z.infer<typeof ReminderResultSchema>;
