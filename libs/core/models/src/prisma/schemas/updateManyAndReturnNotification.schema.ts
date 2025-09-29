import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './objects/NotificationUpdateManyMutationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationUpdateManyAndReturnSchema: z.ZodType<Prisma.NotificationUpdateManyAndReturnArgs> = z.object({ select: NotificationSelectObjectSchema.optional(), data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationUpdateManyAndReturnArgs>;

export const NotificationUpdateManyAndReturnZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict();