import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './FeedingLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FeedingLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => FeedingLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => FeedingLogWhereInputObjectSchema).optional()
}).strict();
export const FeedingLogListRelationFilterObjectSchema: z.ZodType<Prisma.FeedingLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogListRelationFilter>;
export const FeedingLogListRelationFilterObjectZodSchema = makeSchema();
