import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema';
import { NestedEnumMeasurementTypeWithAggregatesFilterObjectSchema as NestedEnumMeasurementTypeWithAggregatesFilterObjectSchema } from './NestedEnumMeasurementTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMeasurementTypeFilterObjectSchema as NestedEnumMeasurementTypeFilterObjectSchema } from './NestedEnumMeasurementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: MeasurementTypeSchema.optional(),
  in: MeasurementTypeSchema.array().optional(),
  notIn: MeasurementTypeSchema.array().optional(),
  not: z.union([MeasurementTypeSchema, z.lazy(() => NestedEnumMeasurementTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMeasurementTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMeasurementTypeFilterObjectSchema).optional()
}).strict();
export const EnumMeasurementTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMeasurementTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMeasurementTypeWithAggregatesFilter>;
export const EnumMeasurementTypeWithAggregatesFilterObjectZodSchema = makeSchema();
