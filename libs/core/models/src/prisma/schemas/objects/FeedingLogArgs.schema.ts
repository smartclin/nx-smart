import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './FeedingLogSelect.schema';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './FeedingLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FeedingLogSelectObjectSchema).optional(),
  include: z.lazy(() => FeedingLogIncludeObjectSchema).optional()
}).strict();
export const FeedingLogArgsObjectSchema = makeSchema();
export const FeedingLogArgsObjectZodSchema = makeSchema();
