import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LabTestCountOrderByAggregateInputObjectSchema as LabTestCountOrderByAggregateInputObjectSchema } from './LabTestCountOrderByAggregateInput.schema';
import { LabTestAvgOrderByAggregateInputObjectSchema as LabTestAvgOrderByAggregateInputObjectSchema } from './LabTestAvgOrderByAggregateInput.schema';
import { LabTestMaxOrderByAggregateInputObjectSchema as LabTestMaxOrderByAggregateInputObjectSchema } from './LabTestMaxOrderByAggregateInput.schema';
import { LabTestMinOrderByAggregateInputObjectSchema as LabTestMinOrderByAggregateInputObjectSchema } from './LabTestMinOrderByAggregateInput.schema';
import { LabTestSumOrderByAggregateInputObjectSchema as LabTestSumOrderByAggregateInputObjectSchema } from './LabTestSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  testDate: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => LabTestCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LabTestAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LabTestMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LabTestMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LabTestSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LabTestOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LabTestOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestOrderByWithAggregationInput>;
export const LabTestOrderByWithAggregationInputObjectZodSchema = makeSchema();
