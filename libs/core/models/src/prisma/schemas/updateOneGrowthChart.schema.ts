import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './objects/GrowthChartInclude.schema';
import { GrowthChartUpdateInputObjectSchema as GrowthChartUpdateInputObjectSchema } from './objects/GrowthChartUpdateInput.schema';
import { GrowthChartUncheckedUpdateInputObjectSchema as GrowthChartUncheckedUpdateInputObjectSchema } from './objects/GrowthChartUncheckedUpdateInput.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './objects/GrowthChartWhereUniqueInput.schema';

export const GrowthChartUpdateOneSchema: z.ZodType<Prisma.GrowthChartUpdateArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), data: z.union([GrowthChartUpdateInputObjectSchema, GrowthChartUncheckedUpdateInputObjectSchema]), where: GrowthChartWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GrowthChartUpdateArgs>;

export const GrowthChartUpdateOneZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), data: z.union([GrowthChartUpdateInputObjectSchema, GrowthChartUncheckedUpdateInputObjectSchema]), where: GrowthChartWhereUniqueInputObjectSchema }).strict();