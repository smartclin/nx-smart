import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  medicalId: z.number().int(),
  doctorId: z.string(),
  symptoms: z.string(),
  diagnosis: z.string(),
  notes: z.string().optional().nullable(),
  prescribedMedications: z.string().optional().nullable(),
  followUpPlan: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DiagnosisCreateManyInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateManyInput>;
export const DiagnosisCreateManyInputObjectZodSchema = makeSchema();
