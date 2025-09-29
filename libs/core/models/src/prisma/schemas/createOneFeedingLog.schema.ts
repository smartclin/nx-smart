import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './objects/FeedingLogInclude.schema';
import { FeedingLogCreateInputObjectSchema as FeedingLogCreateInputObjectSchema } from './objects/FeedingLogCreateInput.schema';
import { FeedingLogUncheckedCreateInputObjectSchema as FeedingLogUncheckedCreateInputObjectSchema } from './objects/FeedingLogUncheckedCreateInput.schema';

export const FeedingLogCreateOneSchema: z.ZodType<Prisma.FeedingLogCreateArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), data: z.union([FeedingLogCreateInputObjectSchema, FeedingLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FeedingLogCreateArgs>;

export const FeedingLogCreateOneZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), data: z.union([FeedingLogCreateInputObjectSchema, FeedingLogUncheckedCreateInputObjectSchema]) }).strict();