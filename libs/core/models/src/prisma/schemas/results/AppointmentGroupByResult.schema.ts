import { z } from 'zod';
export const AppointmentGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  serviceId: z.number().int(),
  appointmentDate: z.date(),
  time: z.string(),
  type: z.string(),
  note: z.string(),
  reason: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    doctorId: z.number(),
    serviceId: z.number(),
    appointmentDate: z.number(),
    time: z.number(),
    status: z.number(),
    type: z.number(),
    note: z.number(),
    patient: z.number(),
    doctor: z.number(),
    service: z.number(),
    bills: z.number(),
    medical: z.number(),
    reminders: z.number(),
    reason: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    Billing: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    serviceId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    serviceId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    doctorId: z.string().nullable(),
    serviceId: z.number().int().nullable(),
    appointmentDate: z.date().nullable(),
    time: z.string().nullable(),
    type: z.string().nullable(),
    note: z.string().nullable(),
    reason: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    doctorId: z.string().nullable(),
    serviceId: z.number().int().nullable(),
    appointmentDate: z.date().nullable(),
    time: z.string().nullable(),
    type: z.string().nullable(),
    note: z.string().nullable(),
    reason: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));