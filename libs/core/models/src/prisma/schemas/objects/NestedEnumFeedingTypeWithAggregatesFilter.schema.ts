import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFeedingTypeFilterObjectSchema as NestedEnumFeedingTypeFilterObjectSchema } from './NestedEnumFeedingTypeFilter.schema'

const nestedenumfeedingtypewithaggregatesfilterSchema = z.object({
  equals: FeedingTypeSchema.optional(),
  in: FeedingTypeSchema.array().optional(),
  notIn: FeedingTypeSchema.array().optional(),
  not: z.union([FeedingTypeSchema, z.lazy(() => NestedEnumFeedingTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumFeedingTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumFeedingTypeWithAggregatesFilter> = nestedenumfeedingtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFeedingTypeWithAggregatesFilter>;
export const NestedEnumFeedingTypeWithAggregatesFilterObjectZodSchema = nestedenumfeedingtypewithaggregatesfilterSchema;
