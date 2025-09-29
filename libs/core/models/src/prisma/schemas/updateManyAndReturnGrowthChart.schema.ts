import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './objects/GrowthChartSelect.schema';
import { GrowthChartUpdateManyMutationInputObjectSchema as GrowthChartUpdateManyMutationInputObjectSchema } from './objects/GrowthChartUpdateManyMutationInput.schema';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './objects/GrowthChartWhereInput.schema';

export const GrowthChartUpdateManyAndReturnSchema: z.ZodType<Prisma.GrowthChartUpdateManyAndReturnArgs> = z.object({ select: GrowthChartSelectObjectSchema.optional(), data: GrowthChartUpdateManyMutationInputObjectSchema, where: GrowthChartWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartUpdateManyAndReturnArgs>;

export const GrowthChartUpdateManyAndReturnZodSchema = z.object({ select: GrowthChartSelectObjectSchema.optional(), data: GrowthChartUpdateManyMutationInputObjectSchema, where: GrowthChartWhereInputObjectSchema.optional() }).strict();