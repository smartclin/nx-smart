import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderFindUniqueSchema: z.ZodType<Prisma.ReminderFindUniqueArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReminderFindUniqueArgs>;

export const ReminderFindUniqueZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), include: ReminderIncludeObjectSchema.optional(), where: ReminderWhereUniqueInputObjectSchema }).strict();