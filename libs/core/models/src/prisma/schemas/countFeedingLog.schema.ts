import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogOrderByWithRelationInputObjectSchema as FeedingLogOrderByWithRelationInputObjectSchema } from './objects/FeedingLogOrderByWithRelationInput.schema';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './objects/FeedingLogWhereInput.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './objects/FeedingLogWhereUniqueInput.schema';
import { FeedingLogCountAggregateInputObjectSchema as FeedingLogCountAggregateInputObjectSchema } from './objects/FeedingLogCountAggregateInput.schema';

export const FeedingLogCountSchema: z.ZodType<Prisma.FeedingLogCountArgs> = z.object({ orderBy: z.union([FeedingLogOrderByWithRelationInputObjectSchema, FeedingLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedingLogWhereInputObjectSchema.optional(), cursor: FeedingLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FeedingLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogCountArgs>;

export const FeedingLogCountZodSchema = z.object({ orderBy: z.union([FeedingLogOrderByWithRelationInputObjectSchema, FeedingLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedingLogWhereInputObjectSchema.optional(), cursor: FeedingLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FeedingLogCountAggregateInputObjectSchema ]).optional() }).strict();