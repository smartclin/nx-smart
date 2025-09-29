import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  medicalRecordId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  medicationName: SortOrderSchema.optional(),
  dosage: SortOrderSchema.optional(),
  frequency: SortOrderSchema.optional(),
  duration: SortOrderSchema.optional(),
  instructions: SortOrderSchema.optional(),
  issuedDate: SortOrderSchema.optional(),
  endDate: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PrescriptionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PrescriptionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCountOrderByAggregateInput>;
export const PrescriptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
