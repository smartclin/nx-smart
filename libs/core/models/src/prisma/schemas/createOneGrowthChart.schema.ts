import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './objects/GrowthChartInclude.schema';
import { GrowthChartCreateInputObjectSchema as GrowthChartCreateInputObjectSchema } from './objects/GrowthChartCreateInput.schema';
import { GrowthChartUncheckedCreateInputObjectSchema as GrowthChartUncheckedCreateInputObjectSchema } from './objects/GrowthChartUncheckedCreateInput.schema';

export const GrowthChartCreateOneSchema: z.ZodType<Prisma.GrowthChartCreateArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), data: z.union([GrowthChartCreateInputObjectSchema, GrowthChartUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GrowthChartCreateArgs>;

export const GrowthChartCreateOneZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), data: z.union([GrowthChartCreateInputObjectSchema, GrowthChartUncheckedCreateInputObjectSchema]) }).strict();