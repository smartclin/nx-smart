import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './objects/FeedingLogWhereInput.schema';

export const FeedingLogDeleteManySchema: z.ZodType<Prisma.FeedingLogDeleteManyArgs> = z.object({ where: FeedingLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogDeleteManyArgs>;

export const FeedingLogDeleteManyZodSchema = z.object({ where: FeedingLogWhereInputObjectSchema.optional() }).strict();