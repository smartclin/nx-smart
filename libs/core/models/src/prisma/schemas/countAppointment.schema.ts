import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './objects/AppointmentOrderByWithRelationInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema';
import { AppointmentCountAggregateInputObjectSchema as AppointmentCountAggregateInputObjectSchema } from './objects/AppointmentCountAggregateInput.schema';

export const AppointmentCountSchema: z.ZodType<Prisma.AppointmentCountArgs> = z.object({ orderBy: z.union([AppointmentOrderByWithRelationInputObjectSchema, AppointmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppointmentWhereInputObjectSchema.optional(), cursor: AppointmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppointmentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentCountArgs>;

export const AppointmentCountZodSchema = z.object({ orderBy: z.union([AppointmentOrderByWithRelationInputObjectSchema, AppointmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppointmentWhereInputObjectSchema.optional(), cursor: AppointmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppointmentCountAggregateInputObjectSchema ]).optional() }).strict();