import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema'

const nestedenummeasurementtypefilterSchema = z.object({
  equals: MeasurementTypeSchema.optional(),
  in: MeasurementTypeSchema.array().optional(),
  notIn: MeasurementTypeSchema.array().optional(),
  not: z.union([MeasurementTypeSchema, z.lazy(() => NestedEnumMeasurementTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMeasurementTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumMeasurementTypeFilter> = nestedenummeasurementtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMeasurementTypeFilter>;
export const NestedEnumMeasurementTypeFilterObjectZodSchema = nestedenummeasurementtypefilterSchema;
