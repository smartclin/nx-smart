import { z } from 'zod';

export const DiagnosisScalarFieldEnumSchema = z.enum(['id', 'patientId', 'medicalId', 'doctorId', 'symptoms', 'diagnosis', 'notes', 'prescribedMedications', 'followUpPlan', 'createdAt', 'updatedAt'])

export type DiagnosisScalarFieldEnum = z.infer<typeof DiagnosisScalarFieldEnumSchema>;