import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { StaffOrderByWithRelationInputObjectSchema as StaffOrderByWithRelationInputObjectSchema } from './objects/StaffOrderByWithRelationInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';
import { StaffCountAggregateInputObjectSchema as StaffCountAggregateInputObjectSchema } from './objects/StaffCountAggregateInput.schema';
import { StaffMinAggregateInputObjectSchema as StaffMinAggregateInputObjectSchema } from './objects/StaffMinAggregateInput.schema';
import { StaffMaxAggregateInputObjectSchema as StaffMaxAggregateInputObjectSchema } from './objects/StaffMaxAggregateInput.schema';
import { StaffAvgAggregateInputObjectSchema as StaffAvgAggregateInputObjectSchema } from './objects/StaffAvgAggregateInput.schema';
import { StaffSumAggregateInputObjectSchema as StaffSumAggregateInputObjectSchema } from './objects/StaffSumAggregateInput.schema';

export const StaffAggregateSchema: z.ZodType<Prisma.StaffAggregateArgs> = z.object({ orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional(), _min: StaffMinAggregateInputObjectSchema.optional(), _max: StaffMaxAggregateInputObjectSchema.optional(), _avg: StaffAvgAggregateInputObjectSchema.optional(), _sum: StaffSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StaffAggregateArgs>;

export const StaffAggregateZodSchema = z.object({ orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional(), _min: StaffMinAggregateInputObjectSchema.optional(), _max: StaffMaxAggregateInputObjectSchema.optional(), _avg: StaffAvgAggregateInputObjectSchema.optional(), _sum: StaffSumAggregateInputObjectSchema.optional() }).strict();