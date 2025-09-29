import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { NestedEnumServiceCategoryNullableWithAggregatesFilterObjectSchema as NestedEnumServiceCategoryNullableWithAggregatesFilterObjectSchema } from './NestedEnumServiceCategoryNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumServiceCategoryNullableFilterObjectSchema as NestedEnumServiceCategoryNullableFilterObjectSchema } from './NestedEnumServiceCategoryNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ServiceCategorySchema.optional().nullable(),
  in: ServiceCategorySchema.array().optional().nullable(),
  notIn: ServiceCategorySchema.array().optional().nullable(),
  not: z.union([ServiceCategorySchema, z.lazy(() => NestedEnumServiceCategoryNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumServiceCategoryNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumServiceCategoryNullableFilterObjectSchema).optional()
}).strict();
export const EnumServiceCategoryNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumServiceCategoryNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumServiceCategoryNullableWithAggregatesFilter>;
export const EnumServiceCategoryNullableWithAggregatesFilterObjectZodSchema = makeSchema();
