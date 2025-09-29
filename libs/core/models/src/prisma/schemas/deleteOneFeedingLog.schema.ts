import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './objects/FeedingLogInclude.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './objects/FeedingLogWhereUniqueInput.schema';

export const FeedingLogDeleteOneSchema: z.ZodType<Prisma.FeedingLogDeleteArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), where: FeedingLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FeedingLogDeleteArgs>;

export const FeedingLogDeleteOneZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), where: FeedingLogWhereUniqueInputObjectSchema }).strict();