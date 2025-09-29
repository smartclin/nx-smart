import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorOrderByWithAggregationInputObjectSchema as DoctorOrderByWithAggregationInputObjectSchema } from './objects/DoctorOrderByWithAggregationInput.schema';
import { DoctorScalarWhereWithAggregatesInputObjectSchema as DoctorScalarWhereWithAggregatesInputObjectSchema } from './objects/DoctorScalarWhereWithAggregatesInput.schema';
import { DoctorScalarFieldEnumSchema } from './enums/DoctorScalarFieldEnum.schema';
import { DoctorCountAggregateInputObjectSchema as DoctorCountAggregateInputObjectSchema } from './objects/DoctorCountAggregateInput.schema';
import { DoctorMinAggregateInputObjectSchema as DoctorMinAggregateInputObjectSchema } from './objects/DoctorMinAggregateInput.schema';
import { DoctorMaxAggregateInputObjectSchema as DoctorMaxAggregateInputObjectSchema } from './objects/DoctorMaxAggregateInput.schema';

export const DoctorGroupBySchema: z.ZodType<Prisma.DoctorGroupByArgs> = z.object({ where: DoctorWhereInputObjectSchema.optional(), orderBy: z.union([DoctorOrderByWithAggregationInputObjectSchema, DoctorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorGroupByArgs>;

export const DoctorGroupByZodSchema = z.object({ where: DoctorWhereInputObjectSchema.optional(), orderBy: z.union([DoctorOrderByWithAggregationInputObjectSchema, DoctorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DoctorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DoctorScalarFieldEnumSchema), _count: z.union([ z.literal(true), DoctorCountAggregateInputObjectSchema ]).optional(), _min: DoctorMinAggregateInputObjectSchema.optional(), _max: DoctorMaxAggregateInputObjectSchema.optional() }).strict();