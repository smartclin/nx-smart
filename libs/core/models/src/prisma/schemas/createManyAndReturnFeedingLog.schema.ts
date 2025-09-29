import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogCreateManyInputObjectSchema as FeedingLogCreateManyInputObjectSchema } from './objects/FeedingLogCreateManyInput.schema';

export const FeedingLogCreateManyAndReturnSchema: z.ZodType<Prisma.FeedingLogCreateManyAndReturnArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), data: z.union([ FeedingLogCreateManyInputObjectSchema, z.array(FeedingLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogCreateManyAndReturnArgs>;

export const FeedingLogCreateManyAndReturnZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), data: z.union([ FeedingLogCreateManyInputObjectSchema, z.array(FeedingLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();