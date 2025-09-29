import { z } from 'zod';
export const ReminderAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    appointmentId: z.number(),
    appointment: z.number(),
    method: z.number(),
    sentAt: z.number(),
    status: z.number()
  }).optional(),
  _sum: z.object({
    appointmentId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    appointmentId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    sentAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    sentAt: z.date().nullable()
  }).nullable().optional()});