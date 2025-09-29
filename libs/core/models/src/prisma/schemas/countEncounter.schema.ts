import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterOrderByWithRelationInputObjectSchema as EncounterOrderByWithRelationInputObjectSchema } from './objects/EncounterOrderByWithRelationInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './objects/EncounterWhereInput.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './objects/EncounterWhereUniqueInput.schema';
import { EncounterCountAggregateInputObjectSchema as EncounterCountAggregateInputObjectSchema } from './objects/EncounterCountAggregateInput.schema';

export const EncounterCountSchema: z.ZodType<Prisma.EncounterCountArgs> = z.object({ orderBy: z.union([EncounterOrderByWithRelationInputObjectSchema, EncounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: EncounterWhereInputObjectSchema.optional(), cursor: EncounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EncounterCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EncounterCountArgs>;

export const EncounterCountZodSchema = z.object({ orderBy: z.union([EncounterOrderByWithRelationInputObjectSchema, EncounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: EncounterWhereInputObjectSchema.optional(), cursor: EncounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EncounterCountAggregateInputObjectSchema ]).optional() }).strict();