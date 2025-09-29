import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema as NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationDeleteOneSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationDeleteArgs>;

export const NotificationDeleteOneZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), include: NotificationIncludeObjectSchema.optional(), where: NotificationWhereUniqueInputObjectSchema }).strict();