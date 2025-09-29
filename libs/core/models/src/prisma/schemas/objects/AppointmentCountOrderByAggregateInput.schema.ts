import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  appointmentDate: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  note: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AppointmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppointmentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCountOrderByAggregateInput>;
export const AppointmentCountOrderByAggregateInputObjectZodSchema = makeSchema();
