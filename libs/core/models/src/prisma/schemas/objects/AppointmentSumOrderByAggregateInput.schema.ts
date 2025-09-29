import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const AppointmentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentSumOrderByAggregateInput>;
export const AppointmentSumOrderByAggregateInputObjectZodSchema = makeSchema();
