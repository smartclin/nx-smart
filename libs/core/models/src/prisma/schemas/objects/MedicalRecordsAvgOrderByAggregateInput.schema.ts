import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional()
}).strict();
export const MedicalRecordsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MedicalRecordsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsAvgOrderByAggregateInput>;
export const MedicalRecordsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
