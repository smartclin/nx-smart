import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppointmentCountOrderByAggregateInputObjectSchema as AppointmentCountOrderByAggregateInputObjectSchema } from './AppointmentCountOrderByAggregateInput.schema';
import { AppointmentAvgOrderByAggregateInputObjectSchema as AppointmentAvgOrderByAggregateInputObjectSchema } from './AppointmentAvgOrderByAggregateInput.schema';
import { AppointmentMaxOrderByAggregateInputObjectSchema as AppointmentMaxOrderByAggregateInputObjectSchema } from './AppointmentMaxOrderByAggregateInput.schema';
import { AppointmentMinOrderByAggregateInputObjectSchema as AppointmentMinOrderByAggregateInputObjectSchema } from './AppointmentMinOrderByAggregateInput.schema';
import { AppointmentSumOrderByAggregateInputObjectSchema as AppointmentSumOrderByAggregateInputObjectSchema } from './AppointmentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appointmentDate: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  note: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AppointmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AppointmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AppointmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AppointmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AppointmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AppointmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentOrderByWithAggregationInput>;
export const AppointmentOrderByWithAggregationInputObjectZodSchema = makeSchema();
