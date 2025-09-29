import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsOrderByWithRelationInputObjectSchema as VitalSignsOrderByWithRelationInputObjectSchema } from './objects/VitalSignsOrderByWithRelationInput.schema';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './objects/VitalSignsWhereInput.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './objects/VitalSignsWhereUniqueInput.schema';
import { VitalSignsCountAggregateInputObjectSchema as VitalSignsCountAggregateInputObjectSchema } from './objects/VitalSignsCountAggregateInput.schema';

export const VitalSignsCountSchema: z.ZodType<Prisma.VitalSignsCountArgs> = z.object({ orderBy: z.union([VitalSignsOrderByWithRelationInputObjectSchema, VitalSignsOrderByWithRelationInputObjectSchema.array()]).optional(), where: VitalSignsWhereInputObjectSchema.optional(), cursor: VitalSignsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VitalSignsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsCountArgs>;

export const VitalSignsCountZodSchema = z.object({ orderBy: z.union([VitalSignsOrderByWithRelationInputObjectSchema, VitalSignsOrderByWithRelationInputObjectSchema.array()]).optional(), where: VitalSignsWhereInputObjectSchema.optional(), cursor: VitalSignsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VitalSignsCountAggregateInputObjectSchema ]).optional() }).strict();