import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorCountAggregateInputObjectSchema as DoctorCountAggregateInputObjectSchema } from './objects/DoctorCountAggregateInput.schema';
import { DoctorMinAggregateInputObjectSchema as DoctorMinAggregateInputObjectSchema } from './objects/DoctorMinAggregateInput.schema';
import { DoctorMaxAggregateInputObjectSchema as DoctorMaxAggregateInputObjectSchema } from './objects/DoctorMaxAggregateInput.schema';

export const DoctorAggregateSchema: z.ZodType<Prisma.DoctorAggregateArgs> = z.object({ orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorAggregateArgs>;

export const DoctorAggregateZodSchema = z.object({ orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict();