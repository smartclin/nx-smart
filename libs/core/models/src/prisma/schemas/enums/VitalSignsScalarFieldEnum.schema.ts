import { z } from 'zod';

export const VitalSignsScalarFieldEnumSchema = z.enum(['id', 'encounterId', 'patientId', 'medicalId', 'height', 'weight', 'temperature', 'systolic', 'diastolic', 'heartRate', 'respiratoryRate', 'oxygenSaturation', 'recordedAt', 'createdAt', 'updatedAt'])

export type VitalSignsScalarFieldEnum = z.infer<typeof VitalSignsScalarFieldEnumSchema>;