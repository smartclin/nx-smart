import { z } from 'zod';
export const DiagnosisGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  patientId: z.string(),
  medicalId: z.number().int(),
  doctorId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string(),
  prescribedMedications: z.string(),
  followUpPlan: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    medicalId: z.number(),
    doctorId: z.number(),
    doctor: z.number(),
    symptoms: z.number(),
    diagnosis: z.number(),
    notes: z.number(),
    prescribedMedications: z.number(),
    followUpPlan: z.number(),
    medical: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    medicalId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    medicalId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    medicalId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    symptoms: z.string().nullable(),
    diagnosis: z.string().nullable(),
    notes: z.string().nullable(),
    prescribedMedications: z.string().nullable(),
    followUpPlan: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    medicalId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    symptoms: z.string().nullable(),
    diagnosis: z.string().nullable(),
    notes: z.string().nullable(),
    prescribedMedications: z.string().nullable(),
    followUpPlan: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));