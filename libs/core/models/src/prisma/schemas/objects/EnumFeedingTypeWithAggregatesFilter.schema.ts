import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { NestedEnumFeedingTypeWithAggregatesFilterObjectSchema as NestedEnumFeedingTypeWithAggregatesFilterObjectSchema } from './NestedEnumFeedingTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFeedingTypeFilterObjectSchema as NestedEnumFeedingTypeFilterObjectSchema } from './NestedEnumFeedingTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FeedingTypeSchema.optional(),
  in: FeedingTypeSchema.array().optional(),
  notIn: FeedingTypeSchema.array().optional(),
  not: z.union([FeedingTypeSchema, z.lazy(() => NestedEnumFeedingTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema).optional()
}).strict();
export const EnumFeedingTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumFeedingTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedingTypeWithAggregatesFilter>;
export const EnumFeedingTypeWithAggregatesFilterObjectZodSchema = makeSchema();
