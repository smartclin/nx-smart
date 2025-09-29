import { z } from 'zod';
export const EncounterGroupByResultSchema = z.array(z.object({
  id: z.string(),
  patientId: z.string(),
  doctorId: z.string(),
  date: z.date(),
  type: z.string(),
  diagnosis: z.string(),
  treatment: z.string(),
  notes: z.string(),
  medicalId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));