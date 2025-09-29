import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysOrderByWithRelationInputObjectSchema as WorkingDaysOrderByWithRelationInputObjectSchema } from './objects/WorkingDaysOrderByWithRelationInput.schema';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './objects/WorkingDaysWhereInput.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysCountAggregateInputObjectSchema as WorkingDaysCountAggregateInputObjectSchema } from './objects/WorkingDaysCountAggregateInput.schema';

export const WorkingDaysCountSchema: z.ZodType<Prisma.WorkingDaysCountArgs> = z.object({ orderBy: z.union([WorkingDaysOrderByWithRelationInputObjectSchema, WorkingDaysOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkingDaysWhereInputObjectSchema.optional(), cursor: WorkingDaysWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkingDaysCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysCountArgs>;

export const WorkingDaysCountZodSchema = z.object({ orderBy: z.union([WorkingDaysOrderByWithRelationInputObjectSchema, WorkingDaysOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkingDaysWhereInputObjectSchema.optional(), cursor: WorkingDaysWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkingDaysCountAggregateInputObjectSchema ]).optional() }).strict();