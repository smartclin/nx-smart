import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './objects/GrowthChartInclude.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './objects/GrowthChartWhereUniqueInput.schema';

export const GrowthChartDeleteOneSchema: z.ZodType<Prisma.GrowthChartDeleteArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), where: GrowthChartWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GrowthChartDeleteArgs>;

export const GrowthChartDeleteOneZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), where: GrowthChartWhereUniqueInputObjectSchema }).strict();