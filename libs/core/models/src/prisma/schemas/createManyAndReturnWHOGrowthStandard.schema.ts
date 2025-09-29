import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardCreateManyInputObjectSchema as WHOGrowthStandardCreateManyInputObjectSchema } from './objects/WHOGrowthStandardCreateManyInput.schema';

export const WHOGrowthStandardCreateManyAndReturnSchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyAndReturnArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(), data: z.union([ WHOGrowthStandardCreateManyInputObjectSchema, z.array(WHOGrowthStandardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardCreateManyAndReturnArgs>;

export const WHOGrowthStandardCreateManyAndReturnZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(), data: z.union([ WHOGrowthStandardCreateManyInputObjectSchema, z.array(WHOGrowthStandardCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();