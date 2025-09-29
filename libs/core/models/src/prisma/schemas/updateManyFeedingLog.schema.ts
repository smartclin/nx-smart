import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogUpdateManyMutationInputObjectSchema as FeedingLogUpdateManyMutationInputObjectSchema } from './objects/FeedingLogUpdateManyMutationInput.schema';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './objects/FeedingLogWhereInput.schema';

export const FeedingLogUpdateManySchema: z.ZodType<Prisma.FeedingLogUpdateManyArgs> = z.object({ data: FeedingLogUpdateManyMutationInputObjectSchema, where: FeedingLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogUpdateManyArgs>;

export const FeedingLogUpdateManyZodSchema = z.object({ data: FeedingLogUpdateManyMutationInputObjectSchema, where: FeedingLogWhereInputObjectSchema.optional() }).strict();