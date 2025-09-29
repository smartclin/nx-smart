import { z } from 'zod';

export const AppointmentStatusSchema = z.enum(['PENDING', 'SCHEDULED', 'CANCELLED', 'COMPLETED'])

export type AppointmentStatus = z.infer<typeof AppointmentStatusSchema>;