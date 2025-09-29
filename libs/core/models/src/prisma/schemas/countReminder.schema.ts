import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderOrderByWithRelationInputObjectSchema as ReminderOrderByWithRelationInputObjectSchema } from './objects/ReminderOrderByWithRelationInput.schema';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';
import { ReminderCountAggregateInputObjectSchema as ReminderCountAggregateInputObjectSchema } from './objects/ReminderCountAggregateInput.schema';

export const ReminderCountSchema: z.ZodType<Prisma.ReminderCountArgs> = z.object({ orderBy: z.union([ReminderOrderByWithRelationInputObjectSchema, ReminderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReminderWhereInputObjectSchema.optional(), cursor: ReminderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReminderCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReminderCountArgs>;

export const ReminderCountZodSchema = z.object({ orderBy: z.union([ReminderOrderByWithRelationInputObjectSchema, ReminderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReminderWhereInputObjectSchema.optional(), cursor: ReminderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReminderCountAggregateInputObjectSchema ]).optional() }).strict();