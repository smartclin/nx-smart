import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional()
}).strict();
export const MedicalRecordsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicalRecordsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsSumOrderByAggregateInput>;
export const MedicalRecordsSumOrderByAggregateInputObjectZodSchema = makeSchema();
