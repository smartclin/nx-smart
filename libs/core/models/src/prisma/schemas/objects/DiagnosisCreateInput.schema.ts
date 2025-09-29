import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema as DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema } from './DoctorCreateNestedOneWithoutDiagnosisInput.schema';
import { MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutDiagnosesInput.schema'

const makeSchema = () => z.object({
  patientId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional().nullable(),
  prescribedMedications: z.string().optional().nullable(),
  followUpPlan: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema)
}).strict();
export const DiagnosisCreateInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateInput>;
export const DiagnosisCreateInputObjectZodSchema = makeSchema();
