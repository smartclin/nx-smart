import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  medicalId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  symptoms: z.literal(true).optional(),
  diagnosis: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  prescribedMedications: z.literal(true).optional(),
  followUpPlan: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DiagnosisMaxAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisMaxAggregateInputType>;
export const DiagnosisMaxAggregateInputObjectZodSchema = makeSchema();
