import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisOrderByWithRelationInputObjectSchema as DiagnosisOrderByWithRelationInputObjectSchema } from './objects/DiagnosisOrderByWithRelationInput.schema';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './objects/DiagnosisWhereInput.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';
import { DiagnosisCountAggregateInputObjectSchema as DiagnosisCountAggregateInputObjectSchema } from './objects/DiagnosisCountAggregateInput.schema';

export const DiagnosisCountSchema: z.ZodType<Prisma.DiagnosisCountArgs> = z.object({ orderBy: z.union([DiagnosisOrderByWithRelationInputObjectSchema, DiagnosisOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiagnosisWhereInputObjectSchema.optional(), cursor: DiagnosisWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiagnosisCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisCountArgs>;

export const DiagnosisCountZodSchema = z.object({ orderBy: z.union([DiagnosisOrderByWithRelationInputObjectSchema, DiagnosisOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiagnosisWhereInputObjectSchema.optional(), cursor: DiagnosisWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiagnosisCountAggregateInputObjectSchema ]).optional() }).strict();