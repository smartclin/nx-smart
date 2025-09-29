import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './objects/FeedingLogInclude.schema';
import { FeedingLogUpdateInputObjectSchema as FeedingLogUpdateInputObjectSchema } from './objects/FeedingLogUpdateInput.schema';
import { FeedingLogUncheckedUpdateInputObjectSchema as FeedingLogUncheckedUpdateInputObjectSchema } from './objects/FeedingLogUncheckedUpdateInput.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './objects/FeedingLogWhereUniqueInput.schema';

export const FeedingLogUpdateOneSchema: z.ZodType<Prisma.FeedingLogUpdateArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), data: z.union([FeedingLogUpdateInputObjectSchema, FeedingLogUncheckedUpdateInputObjectSchema]), where: FeedingLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FeedingLogUpdateArgs>;

export const FeedingLogUpdateOneZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), data: z.union([FeedingLogUpdateInputObjectSchema, FeedingLogUncheckedUpdateInputObjectSchema]), where: FeedingLogWhereUniqueInputObjectSchema }).strict();