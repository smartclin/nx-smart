import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartCreateManyInputObjectSchema as GrowthChartCreateManyInputObjectSchema } from './objects/GrowthChartCreateManyInput.schema';

export const GrowthChartCreateManySchema: z.ZodType<Prisma.GrowthChartCreateManyArgs> = z.object({ data: z.union([ GrowthChartCreateManyInputObjectSchema, z.array(GrowthChartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartCreateManyArgs>;

export const GrowthChartCreateManyZodSchema = z.object({ data: z.union([ GrowthChartCreateManyInputObjectSchema, z.array(GrowthChartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();