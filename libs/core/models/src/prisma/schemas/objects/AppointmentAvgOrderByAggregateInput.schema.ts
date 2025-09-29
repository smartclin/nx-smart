import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const AppointmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentAvgOrderByAggregateInput>;
export const AppointmentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
