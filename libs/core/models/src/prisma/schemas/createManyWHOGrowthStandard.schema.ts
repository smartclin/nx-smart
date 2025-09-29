import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardCreateManyInputObjectSchema as WHOGrowthStandardCreateManyInputObjectSchema } from './objects/WHOGrowthStandardCreateManyInput.schema';

export const WHOGrowthStandardCreateManySchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyArgs> = z.object({ data: z.union([ WHOGrowthStandardCreateManyInputObjectSchema, z.array(WHOGrowthStandardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardCreateManyArgs>;

export const WHOGrowthStandardCreateManyZodSchema = z.object({ data: z.union([ WHOGrowthStandardCreateManyInputObjectSchema, z.array(WHOGrowthStandardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();