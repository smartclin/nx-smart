import { z } from 'zod';
export const WorkingDaysGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  doctorId: z.string(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    doctorId: z.number(),
    day: z.number(),
    startTime: z.number(),
    closeTime: z.number(),
    doctor: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    day: z.string().nullable(),
    startTime: z.string().nullable(),
    closeTime: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    day: z.string().nullable(),
    startTime: z.string().nullable(),
    closeTime: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));