import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutDiagnosesInput.schema'

const makeSchema = () => z.object({
  patientId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional().nullable(),
  prescribedMedications: z.string().optional().nullable(),
  followUpPlan: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema)
}).strict();
export const DiagnosisCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateWithoutDoctorInput>;
export const DiagnosisCreateWithoutDoctorInputObjectZodSchema = makeSchema();
