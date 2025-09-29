import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema as DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema } from './DoctorCreateNestedOneWithoutDiagnosisInput.schema'

const makeSchema = () => z.object({
  patientId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional().nullable(),
  prescribedMedications: z.string().optional().nullable(),
  followUpPlan: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema)
}).strict();
export const DiagnosisCreateWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateWithoutMedicalInput>;
export const DiagnosisCreateWithoutMedicalInputObjectZodSchema = makeSchema();
