import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './objects/GrowthChartInclude.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './objects/GrowthChartWhereUniqueInput.schema';
import { GrowthChartCreateInputObjectSchema as GrowthChartCreateInputObjectSchema } from './objects/GrowthChartCreateInput.schema';
import { GrowthChartUncheckedCreateInputObjectSchema as GrowthChartUncheckedCreateInputObjectSchema } from './objects/GrowthChartUncheckedCreateInput.schema';
import { GrowthChartUpdateInputObjectSchema as GrowthChartUpdateInputObjectSchema } from './objects/GrowthChartUpdateInput.schema';
import { GrowthChartUncheckedUpdateInputObjectSchema as GrowthChartUncheckedUpdateInputObjectSchema } from './objects/GrowthChartUncheckedUpdateInput.schema';

export const GrowthChartUpsertOneSchema: z.ZodType<Prisma.GrowthChartUpsertArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), where: GrowthChartWhereUniqueInputObjectSchema, create: z.union([ GrowthChartCreateInputObjectSchema, GrowthChartUncheckedCreateInputObjectSchema ]), update: z.union([ GrowthChartUpdateInputObjectSchema, GrowthChartUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GrowthChartUpsertArgs>;

export const GrowthChartUpsertOneZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), include: GrowthChartIncludeObjectSchema.optional(), where: GrowthChartWhereUniqueInputObjectSchema, create: z.union([ GrowthChartCreateInputObjectSchema, GrowthChartUncheckedCreateInputObjectSchema ]), update: z.union([ GrowthChartUpdateInputObjectSchema, GrowthChartUncheckedUpdateInputObjectSchema ]) }).strict();