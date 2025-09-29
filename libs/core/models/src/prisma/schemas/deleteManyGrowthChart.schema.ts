import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './objects/GrowthChartWhereInput.schema';

export const GrowthChartDeleteManySchema: z.ZodType<Prisma.GrowthChartDeleteManyArgs> = z.object({ where: GrowthChartWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartDeleteManyArgs>;

export const GrowthChartDeleteManyZodSchema = z.object({ where: GrowthChartWhereInputObjectSchema.optional() }).strict();