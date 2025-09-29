import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartUpdateManyMutationInputObjectSchema as GrowthChartUpdateManyMutationInputObjectSchema } from './objects/GrowthChartUpdateManyMutationInput.schema';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './objects/GrowthChartWhereInput.schema';

export const GrowthChartUpdateManySchema: z.ZodType<Prisma.GrowthChartUpdateManyArgs> = z.object({ data: GrowthChartUpdateManyMutationInputObjectSchema, where: GrowthChartWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartUpdateManyArgs>;

export const GrowthChartUpdateManyZodSchema = z.object({ data: GrowthChartUpdateManyMutationInputObjectSchema, where: GrowthChartWhereInputObjectSchema.optional() }).strict();