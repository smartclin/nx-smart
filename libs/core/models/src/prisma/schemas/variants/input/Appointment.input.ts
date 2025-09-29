import { z } from 'zod';

import { AppointmentStatusSchema } from '../../enums/AppointmentStatus.schema';
// prettier-ignore
export const AppointmentInputSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    doctorId: z.string(),
    serviceId: z.number().int().optional().nullable(),
    appointmentDate: z.date(),
    time: z.string(),
    status: AppointmentStatusSchema.optional().nullable(),
    type: z.string(),
    note: z.string().optional().nullable(),
    patient: z.unknown(),
    doctor: z.unknown(),
    service: z.unknown().optional().nullable(),
    bills: z.array(z.unknown()),
    medical: z.array(z.unknown()),
    reminders: z.array(z.unknown()),
    reason: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Billing: z.array(z.unknown())
}).strict();

export type AppointmentInputType = z.infer<typeof AppointmentInputSchema>;
