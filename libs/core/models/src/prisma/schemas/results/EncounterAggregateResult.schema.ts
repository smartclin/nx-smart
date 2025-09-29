import { z } from 'zod';
export const EncounterAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    patient: z.number(),
    doctorId: z.number(),
    doctor: z.number(),
    date: z.number(),
    type: z.number(),
    diagnosis: z.number(),
    treatment: z.number(),
    notes: z.number(),
    medicalId: z.number(),
    medical: z.number(),
    vitalSigns: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    medicalId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    medicalId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    doctorId: z.string().nullable(),
    date: z.date().nullable(),
    type: z.string().nullable(),
    diagnosis: z.string().nullable(),
    treatment: z.string().nullable(),
    notes: z.string().nullable(),
    medicalId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    patientId: z.string().nullable(),
    doctorId: z.string().nullable(),
    date: z.date().nullable(),
    type: z.string().nullable(),
    diagnosis: z.string().nullable(),
    treatment: z.string().nullable(),
    notes: z.string().nullable(),
    medicalId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});