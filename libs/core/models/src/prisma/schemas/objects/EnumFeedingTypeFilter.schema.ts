import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { NestedEnumFeedingTypeFilterObjectSchema as NestedEnumFeedingTypeFilterObjectSchema } from './NestedEnumFeedingTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FeedingTypeSchema.optional(),
  in: FeedingTypeSchema.array().optional(),
  notIn: FeedingTypeSchema.array().optional(),
  not: z.union([FeedingTypeSchema, z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumFeedingTypeFilterObjectSchema: z.ZodType<Prisma.EnumFeedingTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedingTypeFilter>;
export const EnumFeedingTypeFilterObjectZodSchema = makeSchema();
