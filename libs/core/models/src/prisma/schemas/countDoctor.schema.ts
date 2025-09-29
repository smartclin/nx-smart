import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorCountAggregateInputObjectSchema as DoctorCountAggregateInputObjectSchema } from './objects/DoctorCountAggregateInput.schema';

export const DoctorCountSchema: z.ZodType<Prisma.DoctorCountArgs> = z.object({ orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCountArgs>;

export const DoctorCountZodSchema = z.object({ orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional() }).strict();