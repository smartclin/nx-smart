import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VitalSignsCountOrderByAggregateInputObjectSchema as VitalSignsCountOrderByAggregateInputObjectSchema } from './VitalSignsCountOrderByAggregateInput.schema';
import { VitalSignsAvgOrderByAggregateInputObjectSchema as VitalSignsAvgOrderByAggregateInputObjectSchema } from './VitalSignsAvgOrderByAggregateInput.schema';
import { VitalSignsMaxOrderByAggregateInputObjectSchema as VitalSignsMaxOrderByAggregateInputObjectSchema } from './VitalSignsMaxOrderByAggregateInput.schema';
import { VitalSignsMinOrderByAggregateInputObjectSchema as VitalSignsMinOrderByAggregateInputObjectSchema } from './VitalSignsMinOrderByAggregateInput.schema';
import { VitalSignsSumOrderByAggregateInputObjectSchema as VitalSignsSumOrderByAggregateInputObjectSchema } from './VitalSignsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  encounterId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patientId: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  height: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  weight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  temperature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  systolic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  diastolic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  heartRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  respiratoryRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  oxygenSaturation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  recordedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VitalSignsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VitalSignsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VitalSignsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VitalSignsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VitalSignsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VitalSignsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VitalSignsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsOrderByWithAggregationInput>;
export const VitalSignsOrderByWithAggregationInputObjectZodSchema = makeSchema();
