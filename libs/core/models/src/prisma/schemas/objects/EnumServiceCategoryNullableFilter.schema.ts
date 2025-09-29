import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { NestedEnumServiceCategoryNullableFilterObjectSchema as NestedEnumServiceCategoryNullableFilterObjectSchema } from './NestedEnumServiceCategoryNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ServiceCategorySchema.optional().nullable(),
  in: ServiceCategorySchema.array().optional().nullable(),
  notIn: ServiceCategorySchema.array().optional().nullable(),
  not: z.union([ServiceCategorySchema, z.lazy(() => NestedEnumServiceCategoryNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumServiceCategoryNullableFilterObjectSchema: z.ZodType<Prisma.EnumServiceCategoryNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumServiceCategoryNullableFilter>;
export const EnumServiceCategoryNullableFilterObjectZodSchema = makeSchema();
