import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestOrderByWithRelationInputObjectSchema as LabTestOrderByWithRelationInputObjectSchema } from './objects/LabTestOrderByWithRelationInput.schema';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './objects/LabTestWhereInput.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';
import { LabTestCountAggregateInputObjectSchema as LabTestCountAggregateInputObjectSchema } from './objects/LabTestCountAggregateInput.schema';

export const LabTestCountSchema: z.ZodType<Prisma.LabTestCountArgs> = z.object({ orderBy: z.union([LabTestOrderByWithRelationInputObjectSchema, LabTestOrderByWithRelationInputObjectSchema.array()]).optional(), where: LabTestWhereInputObjectSchema.optional(), cursor: LabTestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LabTestCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LabTestCountArgs>;

export const LabTestCountZodSchema = z.object({ orderBy: z.union([LabTestOrderByWithRelationInputObjectSchema, LabTestOrderByWithRelationInputObjectSchema.array()]).optional(), where: LabTestWhereInputObjectSchema.optional(), cursor: LabTestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LabTestCountAggregateInputObjectSchema ]).optional() }).strict();