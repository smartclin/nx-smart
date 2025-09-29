import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderFindUniqueOrThrowSchema: z.ZodType<Prisma.ReminderFindUniqueOrThrowArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReminderFindUniqueOrThrowArgs>;

export const ReminderFindUniqueOrThrowZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema }).strict();