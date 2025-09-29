import { z } from 'zod';

import { AppointmentStatusSchema } from '../../enums/AppointmentStatus.schema';
// prettier-ignore
export const AppointmentModelSchema = z.object({
    id: z.number().int(),
    patientId: z.string(),
    doctorId: z.string(),
    serviceId: z.number().int().nullable(),
    appointmentDate: z.date(),
    time: z.string(),
    status: AppointmentStatusSchema.nullable(),
    type: z.string(),
    note: z.string().nullable(),
    patient: z.unknown(),
    doctor: z.unknown(),
    service: z.unknown().nullable(),
    bills: z.array(z.unknown()),
    medical: z.array(z.unknown()),
    reminders: z.array(z.unknown()),
    reason: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Billing: z.array(z.unknown())
}).strict();

export type AppointmentModelType = z.infer<typeof AppointmentModelSchema>;
