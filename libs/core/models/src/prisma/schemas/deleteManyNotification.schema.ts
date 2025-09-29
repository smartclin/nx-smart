import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationDeleteManySchema: z.ZodType<Prisma.NotificationDeleteManyArgs> = z.object({ where: NotificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationDeleteManyArgs>;

export const NotificationDeleteManyZodSchema = z.object({ where: NotificationWhereInputObjectSchema.optional() }).strict();