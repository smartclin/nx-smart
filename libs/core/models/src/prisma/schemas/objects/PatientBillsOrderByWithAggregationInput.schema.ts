import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PatientBillsCountOrderByAggregateInputObjectSchema as PatientBillsCountOrderByAggregateInputObjectSchema } from './PatientBillsCountOrderByAggregateInput.schema';
import { PatientBillsAvgOrderByAggregateInputObjectSchema as PatientBillsAvgOrderByAggregateInputObjectSchema } from './PatientBillsAvgOrderByAggregateInput.schema';
import { PatientBillsMaxOrderByAggregateInputObjectSchema as PatientBillsMaxOrderByAggregateInputObjectSchema } from './PatientBillsMaxOrderByAggregateInput.schema';
import { PatientBillsMinOrderByAggregateInputObjectSchema as PatientBillsMinOrderByAggregateInputObjectSchema } from './PatientBillsMinOrderByAggregateInput.schema';
import { PatientBillsSumOrderByAggregateInputObjectSchema as PatientBillsSumOrderByAggregateInputObjectSchema } from './PatientBillsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  serviceDate: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unitCost: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PatientBillsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PatientBillsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PatientBillsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PatientBillsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PatientBillsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PatientBillsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PatientBillsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsOrderByWithAggregationInput>;
export const PatientBillsOrderByWithAggregationInputObjectZodSchema = makeSchema();
