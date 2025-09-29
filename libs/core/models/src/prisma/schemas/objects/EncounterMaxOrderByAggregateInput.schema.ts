import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  diagnosis: SortOrderSchema.optional(),
  treatment: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const EncounterMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EncounterMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterMaxOrderByAggregateInput>;
export const EncounterMaxOrderByAggregateInputObjectZodSchema = makeSchema();
