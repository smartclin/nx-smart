import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ImmunizationCountOrderByAggregateInputObjectSchema as ImmunizationCountOrderByAggregateInputObjectSchema } from './ImmunizationCountOrderByAggregateInput.schema';
import { ImmunizationMaxOrderByAggregateInputObjectSchema as ImmunizationMaxOrderByAggregateInputObjectSchema } from './ImmunizationMaxOrderByAggregateInput.schema';
import { ImmunizationMinOrderByAggregateInputObjectSchema as ImmunizationMinOrderByAggregateInputObjectSchema } from './ImmunizationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  vaccine: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  dose: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lotNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  administeredByStaffId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ImmunizationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ImmunizationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ImmunizationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ImmunizationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ImmunizationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationOrderByWithAggregationInput>;
export const ImmunizationOrderByWithAggregationInputObjectZodSchema = makeSchema();
