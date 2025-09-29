import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogSelectObjectSchema as FeedingLogSelectObjectSchema } from './objects/FeedingLogSelect.schema';
import { FeedingLogUpdateManyMutationInputObjectSchema as FeedingLogUpdateManyMutationInputObjectSchema } from './objects/FeedingLogUpdateManyMutationInput.schema';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './objects/FeedingLogWhereInput.schema';

export const FeedingLogUpdateManyAndReturnSchema: z.ZodType<Prisma.FeedingLogUpdateManyAndReturnArgs> = z.object({ select: FeedingLogSelectObjectSchema.optional(), data: FeedingLogUpdateManyMutationInputObjectSchema, where: FeedingLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogUpdateManyAndReturnArgs>;

export const FeedingLogUpdateManyAndReturnZodSchema = z.object({ select: FeedingLogSelectObjectSchema.optional(), data: FeedingLogUpdateManyMutationInputObjectSchema, where: FeedingLogWhereInputObjectSchema.optional() }).strict();