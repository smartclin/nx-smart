import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationOrderByWithRelationInputObjectSchema as ImmunizationOrderByWithRelationInputObjectSchema } from './objects/ImmunizationOrderByWithRelationInput.schema';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './objects/ImmunizationWhereInput.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';
import { ImmunizationCountAggregateInputObjectSchema as ImmunizationCountAggregateInputObjectSchema } from './objects/ImmunizationCountAggregateInput.schema';

export const ImmunizationCountSchema: z.ZodType<Prisma.ImmunizationCountArgs> = z.object({ orderBy: z.union([ImmunizationOrderByWithRelationInputObjectSchema, ImmunizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImmunizationWhereInputObjectSchema.optional(), cursor: ImmunizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ImmunizationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationCountArgs>;

export const ImmunizationCountZodSchema = z.object({ orderBy: z.union([ImmunizationOrderByWithRelationInputObjectSchema, ImmunizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImmunizationWhereInputObjectSchema.optional(), cursor: ImmunizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ImmunizationCountAggregateInputObjectSchema ]).optional() }).strict();