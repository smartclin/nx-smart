import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  encounterId: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  systolic: SortOrderSchema.optional(),
  diastolic: SortOrderSchema.optional(),
  heartRate: SortOrderSchema.optional(),
  respiratoryRate: SortOrderSchema.optional(),
  oxygenSaturation: SortOrderSchema.optional(),
  recordedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VitalSignsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VitalSignsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsMinOrderByAggregateInput>;
export const VitalSignsMinOrderByAggregateInputObjectZodSchema = makeSchema();
