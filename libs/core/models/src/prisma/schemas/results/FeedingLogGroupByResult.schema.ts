import { z } from 'zod';
export const FeedingLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  patientId: z.string(),
  date: z.date(),
  duration: z.number().int(),
  amount: z.number(),
  breast: z.string(),
  notes: z.string(),
  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    patient: z.number(),
    date: z.number(),
    type: z.number(),
    duration: z.number(),
    amount: z.number(),
    breast: z.number(),
    notes: z.number()
  }).optional(),
  _sum: z.object({
    duration: z.number().nullable(),
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    duration: z.number().nullable(),
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    date: z.date().nullable(),
    duration: z.number().int().nullable(),
    amount: z.number().nullable(),
    breast: z.string().nullable(),
    notes: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    date: z.date().nullable(),
    duration: z.number().int().nullable(),
    amount: z.number().nullable(),
    breast: z.string().nullable(),
    notes: z.string().nullable()
  }).nullable().optional()
}));