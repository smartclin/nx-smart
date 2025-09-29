import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartOrderByWithRelationInputObjectSchema as GrowthChartOrderByWithRelationInputObjectSchema } from './objects/GrowthChartOrderByWithRelationInput.schema';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './objects/GrowthChartWhereInput.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './objects/GrowthChartWhereUniqueInput.schema';
import { GrowthChartCountAggregateInputObjectSchema as GrowthChartCountAggregateInputObjectSchema } from './objects/GrowthChartCountAggregateInput.schema';

export const GrowthChartCountSchema: z.ZodType<Prisma.GrowthChartCountArgs> = z.object({ orderBy: z.union([GrowthChartOrderByWithRelationInputObjectSchema, GrowthChartOrderByWithRelationInputObjectSchema.array()]).optional(), where: GrowthChartWhereInputObjectSchema.optional(), cursor: GrowthChartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GrowthChartCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartCountArgs>;

export const GrowthChartCountZodSchema = z.object({ orderBy: z.union([GrowthChartOrderByWithRelationInputObjectSchema, GrowthChartOrderByWithRelationInputObjectSchema.array()]).optional(), where: GrowthChartWhereInputObjectSchema.optional(), cursor: GrowthChartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GrowthChartCountAggregateInputObjectSchema ]).optional() }).strict();