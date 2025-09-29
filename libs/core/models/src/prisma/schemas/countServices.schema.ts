import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesOrderByWithRelationInputObjectSchema as ServicesOrderByWithRelationInputObjectSchema } from './objects/ServicesOrderByWithRelationInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './objects/ServicesWhereInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './objects/ServicesWhereUniqueInput.schema';
import { ServicesCountAggregateInputObjectSchema as ServicesCountAggregateInputObjectSchema } from './objects/ServicesCountAggregateInput.schema';

export const ServicesCountSchema: z.ZodType<Prisma.ServicesCountArgs> = z.object({ orderBy: z.union([ServicesOrderByWithRelationInputObjectSchema, ServicesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServicesWhereInputObjectSchema.optional(), cursor: ServicesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServicesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ServicesCountArgs>;

export const ServicesCountZodSchema = z.object({ orderBy: z.union([ServicesOrderByWithRelationInputObjectSchema, ServicesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServicesWhereInputObjectSchema.optional(), cursor: ServicesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServicesCountAggregateInputObjectSchema ]).optional() }).strict();