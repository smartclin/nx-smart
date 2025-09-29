import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingOrderByWithRelationInputObjectSchema as BillingOrderByWithRelationInputObjectSchema } from './objects/BillingOrderByWithRelationInput.schema';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './objects/BillingWhereInput.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './objects/BillingWhereUniqueInput.schema';
import { BillingCountAggregateInputObjectSchema as BillingCountAggregateInputObjectSchema } from './objects/BillingCountAggregateInput.schema';

export const BillingCountSchema: z.ZodType<Prisma.BillingCountArgs> = z.object({ orderBy: z.union([BillingOrderByWithRelationInputObjectSchema, BillingOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingWhereInputObjectSchema.optional(), cursor: BillingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BillingCountArgs>;

export const BillingCountZodSchema = z.object({ orderBy: z.union([BillingOrderByWithRelationInputObjectSchema, BillingOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingWhereInputObjectSchema.optional(), cursor: BillingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BillingCountAggregateInputObjectSchema ]).optional() }).strict();