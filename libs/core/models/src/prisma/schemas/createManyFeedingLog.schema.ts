import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogCreateManyInputObjectSchema as FeedingLogCreateManyInputObjectSchema } from './objects/FeedingLogCreateManyInput.schema';

export const FeedingLogCreateManySchema: z.ZodType<Prisma.FeedingLogCreateManyArgs> = z.object({ data: z.union([ FeedingLogCreateManyInputObjectSchema, z.array(FeedingLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogCreateManyArgs>;

export const FeedingLogCreateManyZodSchema = z.object({ data: z.union([ FeedingLogCreateManyInputObjectSchema, z.array(FeedingLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();