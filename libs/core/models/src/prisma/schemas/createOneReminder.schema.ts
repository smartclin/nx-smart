import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderCreateInputObjectSchema as ReminderCreateInputObjectSchema } from './objects/ReminderCreateInput.schema';
import { ReminderUncheckedCreateInputObjectSchema as ReminderUncheckedCreateInputObjectSchema } from './objects/ReminderUncheckedCreateInput.schema';

export const ReminderCreateOneSchema: z.ZodType<Prisma.ReminderCreateArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), data: z.union([ReminderCreateInputObjectSchema, ReminderUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReminderCreateArgs>;

export const ReminderCreateOneZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), data: z.union([ReminderCreateInputObjectSchema, ReminderUncheckedCreateInputObjectSchema]) }).strict();