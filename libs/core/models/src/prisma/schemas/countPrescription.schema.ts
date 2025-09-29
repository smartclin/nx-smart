import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionOrderByWithRelationInputObjectSchema as PrescriptionOrderByWithRelationInputObjectSchema } from './objects/PrescriptionOrderByWithRelationInput.schema';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './objects/PrescriptionWhereInput.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './objects/PrescriptionWhereUniqueInput.schema';
import { PrescriptionCountAggregateInputObjectSchema as PrescriptionCountAggregateInputObjectSchema } from './objects/PrescriptionCountAggregateInput.schema';

export const PrescriptionCountSchema: z.ZodType<Prisma.PrescriptionCountArgs> = z.object({ orderBy: z.union([PrescriptionOrderByWithRelationInputObjectSchema, PrescriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PrescriptionWhereInputObjectSchema.optional(), cursor: PrescriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PrescriptionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionCountArgs>;

export const PrescriptionCountZodSchema = z.object({ orderBy: z.union([PrescriptionOrderByWithRelationInputObjectSchema, PrescriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PrescriptionWhereInputObjectSchema.optional(), cursor: PrescriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PrescriptionCountAggregateInputObjectSchema ]).optional() }).strict();