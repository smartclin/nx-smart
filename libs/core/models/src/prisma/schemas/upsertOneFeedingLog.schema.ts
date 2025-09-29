import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './objects/FeedingLogInclude.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './objects/FeedingLogWhereUniqueInput.schema';
import { FeedingLogCreateInputObjectSchema as FeedingLogCreateInputObjectSchema } from './objects/FeedingLogCreateInput.schema';
import { FeedingLogUncheckedCreateInputObjectSchema as FeedingLogUncheckedCreateInputObjectSchema } from './objects/FeedingLogUncheckedCreateInput.schema';
import { FeedingLogUpdateInputObjectSchema as FeedingLogUpdateInputObjectSchema } from './objects/FeedingLogUpdateInput.schema';
import { FeedingLogUncheckedUpdateInputObjectSchema as FeedingLogUncheckedUpdateInputObjectSchema } from './objects/FeedingLogUncheckedUpdateInput.schema';

export const FeedingLogUpsertOneSchema: z.ZodType<Prisma.FeedingLogUpsertArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), where: FeedingLogWhereUniqueInputObjectSchema, create: z.union([ FeedingLogCreateInputObjectSchema, FeedingLogUncheckedCreateInputObjectSchema ]), update: z.union([ FeedingLogUpdateInputObjectSchema, FeedingLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FeedingLogUpsertArgs>;

export const FeedingLogUpsertOneZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), include: FeedingLogIncludeObjectSchema.optional(), where: FeedingLogWhereUniqueInputObjectSchema, create: z.union([ FeedingLogCreateInputObjectSchema, FeedingLogUncheckedCreateInputObjectSchema ]), update: z.union([ FeedingLogUpdateInputObjectSchema, FeedingLogUncheckedUpdateInputObjectSchema ]) }).strict();