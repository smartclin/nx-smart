import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';
import { ReminderCreateInputObjectSchema as ReminderCreateInputObjectSchema } from './objects/ReminderCreateInput.schema';
import { ReminderUncheckedCreateInputObjectSchema as ReminderUncheckedCreateInputObjectSchema } from './objects/ReminderUncheckedCreateInput.schema';
import { ReminderUpdateInputObjectSchema as ReminderUpdateInputObjectSchema } from './objects/ReminderUpdateInput.schema';
import { ReminderUncheckedUpdateInputObjectSchema as ReminderUncheckedUpdateInputObjectSchema } from './objects/ReminderUncheckedUpdateInput.schema';

export const ReminderUpsertOneSchema: z.ZodType<Prisma.ReminderUpsertArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema, create: z.union([ ReminderCreateInputObjectSchema, ReminderUncheckedCreateInputObjectSchema ]), update: z.union([ ReminderUpdateInputObjectSchema, ReminderUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReminderUpsertArgs>;

export const ReminderUpsertOneZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema, create: z.union([ ReminderCreateInputObjectSchema, ReminderUncheckedCreateInputObjectSchema ]), update: z.union([ ReminderUpdateInputObjectSchema, ReminderUncheckedUpdateInputObjectSchema ]) }).strict();