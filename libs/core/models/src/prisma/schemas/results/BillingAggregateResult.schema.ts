import { z } from 'zod';
export const BillingAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    patient: z.number(),
    appointmentId: z.number(),
    appointment: z.number(),
    amount: z.number(),
    status: z.number(),
    insurance: z.number(),
    insuranceId: z.number(),
    serviceDate: z.number(),
    dueDate: z.number(),
    paidDate: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    appointmentId: z.number().nullable(),
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    appointmentId: z.number().nullable(),
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    amount: z.number().nullable(),
    insurance: z.string().nullable(),
    insuranceId: z.string().nullable(),
    serviceDate: z.date().nullable(),
    dueDate: z.date().nullable(),
    paidDate: z.date().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    amount: z.number().nullable(),
    insurance: z.string().nullable(),
    insuranceId: z.string().nullable(),
    serviceDate: z.date().nullable(),
    dueDate: z.date().nullable(),
    paidDate: z.date().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});