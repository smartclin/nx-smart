import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema'

const nestedenumfeedingtypefilterSchema = z.object({
  equals: FeedingTypeSchema.optional(),
  in: FeedingTypeSchema.array().optional(),
  notIn: FeedingTypeSchema.array().optional(),
  not: z.union([FeedingTypeSchema, z.lazy(() => NestedEnumFeedingTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumFeedingTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumFeedingTypeFilter> = nestedenumfeedingtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumFeedingTypeFilter>;
export const NestedEnumFeedingTypeFilterObjectZodSchema = nestedenumfeedingtypefilterSchema;
