import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartCreateManyInputObjectSchema as GrowthChartCreateManyInputObjectSchema } from './objects/GrowthChartCreateManyInput.schema';

export const GrowthChartCreateManyAndReturnSchema: z.ZodType<Prisma.GrowthChartCreateManyAndReturnArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), data: z.union([ GrowthChartCreateManyInputObjectSchema, z.array(GrowthChartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartCreateManyAndReturnArgs>;

export const GrowthChartCreateManyAndReturnZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), data: z.union([ GrowthChartCreateManyInputObjectSchema, z.array(GrowthChartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();