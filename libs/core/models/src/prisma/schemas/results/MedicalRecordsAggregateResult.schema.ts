import { z } from 'zod';
export const MedicalRecordsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    patientId: z.number(),
    appointmentId: z.number(),
    doctorId: z.number(),
    treatmentPlan: z.number(),
    prescriptions: z.number(),
    labRequest: z.number(),
    notes: z.number(),
    appointment: z.number(),
    patient: z.number(),
    doctor: z.number(),
    labTests: z.number(),
    encounters: z.number(),
    diagnoses: z.number(),
    prescriptionsList: z.number(),
    vitalSigns: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    appointmentId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    appointmentId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    treatmentPlan: z.string().nullable(),
    prescriptions: z.string().nullable(),
    labRequest: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    patientId: z.string().nullable(),
    appointmentId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    treatmentPlan: z.string().nullable(),
    prescriptions: z.string().nullable(),
    labRequest: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});