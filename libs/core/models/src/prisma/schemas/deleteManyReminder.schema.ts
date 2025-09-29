import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema';

export const ReminderDeleteManySchema: z.ZodType<Prisma.ReminderDeleteManyArgs> = z.object({ where: ReminderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReminderDeleteManyArgs>;

export const ReminderDeleteManyZodSchema = z.object({ where: ReminderWhereInputObjectSchema.optional() }).strict();