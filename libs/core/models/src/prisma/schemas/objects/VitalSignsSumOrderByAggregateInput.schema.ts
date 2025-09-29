import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  medicalId: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  systolic: SortOrderSchema.optional(),
  diastolic: SortOrderSchema.optional(),
  heartRate: SortOrderSchema.optional(),
  respiratoryRate: SortOrderSchema.optional(),
  oxygenSaturation: SortOrderSchema.optional()
}).strict();
export const VitalSignsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VitalSignsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsSumOrderByAggregateInput>;
export const VitalSignsSumOrderByAggregateInputObjectZodSchema = makeSchema();
