import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  medicalId: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  symptoms: z.boolean().optional(),
  diagnosis: z.boolean().optional(),
  notes: z.boolean().optional(),
  prescribedMedications: z.boolean().optional(),
  followUpPlan: z.boolean().optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DiagnosisSelectObjectSchema: z.ZodType<Prisma.DiagnosisSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisSelect>;
export const DiagnosisSelectObjectZodSchema = makeSchema();
