import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BillingCountOrderByAggregateInputObjectSchema as BillingCountOrderByAggregateInputObjectSchema } from './BillingCountOrderByAggregateInput.schema';
import { BillingAvgOrderByAggregateInputObjectSchema as BillingAvgOrderByAggregateInputObjectSchema } from './BillingAvgOrderByAggregateInput.schema';
import { BillingMaxOrderByAggregateInputObjectSchema as BillingMaxOrderByAggregateInputObjectSchema } from './BillingMaxOrderByAggregateInput.schema';
import { BillingMinOrderByAggregateInputObjectSchema as BillingMinOrderByAggregateInputObjectSchema } from './BillingMinOrderByAggregateInput.schema';
import { BillingSumOrderByAggregateInputObjectSchema as BillingSumOrderByAggregateInputObjectSchema } from './BillingSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  insurance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  insuranceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceDate: SortOrderSchema.optional(),
  dueDate: SortOrderSchema.optional(),
  paidDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BillingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BillingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BillingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BillingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BillingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BillingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BillingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingOrderByWithAggregationInput>;
export const BillingOrderByWithAggregationInputObjectZodSchema = makeSchema();
