import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderUpdateInputObjectSchema as ReminderUpdateInputObjectSchema } from './objects/ReminderUpdateInput.schema';
import { ReminderUncheckedUpdateInputObjectSchema as ReminderUncheckedUpdateInputObjectSchema } from './objects/ReminderUncheckedUpdateInput.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderUpdateOneSchema: z.ZodType<Prisma.ReminderUpdateArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), data: z.union([ReminderUpdateInputObjectSchema, ReminderUncheckedUpdateInputObjectSchema]), where: ReminderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReminderUpdateArgs>;

export const ReminderUpdateOneZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), data: z.union([ReminderUpdateInputObjectSchema, ReminderUncheckedUpdateInputObjectSchema]), where: ReminderWhereUniqueInputObjectSchema }).strict();