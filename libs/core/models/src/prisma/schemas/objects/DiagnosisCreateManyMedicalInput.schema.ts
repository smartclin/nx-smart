import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  doctorId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional().nullable(),
  prescribedMedications: z.string().optional().nullable(),
  followUpPlan: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DiagnosisCreateManyMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateManyMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateManyMedicalInput>;
export const DiagnosisCreateManyMedicalInputObjectZodSchema = makeSchema();
