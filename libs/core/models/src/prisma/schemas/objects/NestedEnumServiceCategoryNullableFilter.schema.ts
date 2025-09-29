import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema'

const nestedenumservicecategorynullablefilterSchema = z.object({
  equals: ServiceCategorySchema.optional().nullable(),
  in: ServiceCategorySchema.array().optional().nullable(),
  notIn: ServiceCategorySchema.array().optional().nullable(),
  not: z.union([ServiceCategorySchema, z.lazy(() => NestedEnumServiceCategoryNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumServiceCategoryNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumServiceCategoryNullableFilter> = nestedenumservicecategorynullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumServiceCategoryNullableFilter>;
export const NestedEnumServiceCategoryNullableFilterObjectZodSchema = nestedenumservicecategorynullablefilterSchema;
