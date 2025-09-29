import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  treatmentPlan: SortOrderSchema.optional(),
  prescriptions: SortOrderSchema.optional(),
  labRequest: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MedicalRecordsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCountOrderByAggregateInput>;
export const MedicalRecordsCountOrderByAggregateInputObjectZodSchema = makeSchema();
