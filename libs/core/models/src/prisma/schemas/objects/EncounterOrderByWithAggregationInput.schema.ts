import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EncounterCountOrderByAggregateInputObjectSchema as EncounterCountOrderByAggregateInputObjectSchema } from './EncounterCountOrderByAggregateInput.schema';
import { EncounterAvgOrderByAggregateInputObjectSchema as EncounterAvgOrderByAggregateInputObjectSchema } from './EncounterAvgOrderByAggregateInput.schema';
import { EncounterMaxOrderByAggregateInputObjectSchema as EncounterMaxOrderByAggregateInputObjectSchema } from './EncounterMaxOrderByAggregateInput.schema';
import { EncounterMinOrderByAggregateInputObjectSchema as EncounterMinOrderByAggregateInputObjectSchema } from './EncounterMinOrderByAggregateInput.schema';
import { EncounterSumOrderByAggregateInputObjectSchema as EncounterSumOrderByAggregateInputObjectSchema } from './EncounterSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  diagnosis: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  treatment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EncounterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EncounterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EncounterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EncounterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EncounterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EncounterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EncounterOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterOrderByWithAggregationInput>;
export const EncounterOrderByWithAggregationInputObjectZodSchema = makeSchema();
