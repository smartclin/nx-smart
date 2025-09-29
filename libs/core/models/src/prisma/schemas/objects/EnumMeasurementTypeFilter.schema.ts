import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema';
import { NestedEnumMeasurementTypeFilterObjectSchema as NestedEnumMeasurementTypeFilterObjectSchema } from './NestedEnumMeasurementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: MeasurementTypeSchema.optional(),
  in: MeasurementTypeSchema.array().optional(),
  notIn: MeasurementTypeSchema.array().optional(),
  not: z.union([MeasurementTypeSchema, z.lazy(() => NestedEnumMeasurementTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumMeasurementTypeFilterObjectSchema: z.ZodType<Prisma.EnumMeasurementTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMeasurementTypeFilter>;
export const EnumMeasurementTypeFilterObjectZodSchema = makeSchema();
