import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsOrderByWithRelationInputObjectSchema as PatientBillsOrderByWithRelationInputObjectSchema } from './objects/PatientBillsOrderByWithRelationInput.schema';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './objects/PatientBillsWhereInput.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './objects/PatientBillsWhereUniqueInput.schema';
import { PatientBillsCountAggregateInputObjectSchema as PatientBillsCountAggregateInputObjectSchema } from './objects/PatientBillsCountAggregateInput.schema';

export const PatientBillsCountSchema: z.ZodType<Prisma.PatientBillsCountArgs> = z.object({ orderBy: z.union([PatientBillsOrderByWithRelationInputObjectSchema, PatientBillsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientBillsWhereInputObjectSchema.optional(), cursor: PatientBillsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PatientBillsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsCountArgs>;

export const PatientBillsCountZodSchema = z.object({ orderBy: z.union([PatientBillsOrderByWithRelationInputObjectSchema, PatientBillsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientBillsWhereInputObjectSchema.optional(), cursor: PatientBillsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PatientBillsCountAggregateInputObjectSchema ]).optional() }).strict();