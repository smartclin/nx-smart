import { z } from 'zod';
export const PrescriptionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    medicalRecordId: z.number(),
    doctorId: z.number(),
    patientId: z.number(),
    medicationName: z.number(),
    dosage: z.number(),
    frequency: z.number(),
    duration: z.number(),
    instructions: z.number(),
    issuedDate: z.number(),
    endDate: z.number(),
    status: z.number(),
    medicalRecord: z.number(),
    doctor: z.number(),
    patient: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    medicalRecordId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    medicalRecordId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    medicalRecordId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    patientId: z.string().nullable(),
    medicationName: z.string().nullable(),
    dosage: z.string().nullable(),
    frequency: z.string().nullable(),
    duration: z.string().nullable(),
    instructions: z.string().nullable(),
    issuedDate: z.date().nullable(),
    endDate: z.date().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    medicalRecordId: z.number().int().nullable(),
    doctorId: z.string().nullable(),
    patientId: z.string().nullable(),
    medicationName: z.string().nullable(),
    dosage: z.string().nullable(),
    frequency: z.string().nullable(),
    duration: z.string().nullable(),
    instructions: z.string().nullable(),
    issuedDate: z.date().nullable(),
    endDate: z.date().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});