import { z } from 'zod';
export const ImmunizationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    patient: z.number(),
    vaccine: z.number(),
    date: z.number(),
    dose: z.number(),
    lotNumber: z.number(),
    administeredByStaffId: z.number(),
    administeredBy: z.number(),
    notes: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    vaccine: z.string().nullable(),
    date: z.date().nullable(),
    dose: z.string().nullable(),
    lotNumber: z.string().nullable(),
    administeredByStaffId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    vaccine: z.string().nullable(),
    date: z.date().nullable(),
    dose: z.string().nullable(),
    lotNumber: z.string().nullable(),
    administeredByStaffId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});