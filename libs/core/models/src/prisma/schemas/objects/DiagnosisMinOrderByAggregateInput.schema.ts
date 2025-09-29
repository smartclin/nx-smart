import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  symptoms: SortOrderSchema.optional(),
  diagnosis: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  prescribedMedications: SortOrderSchema.optional(),
  followUpPlan: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DiagnosisMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiagnosisMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisMinOrderByAggregateInput>;
export const DiagnosisMinOrderByAggregateInputObjectZodSchema = makeSchema();
