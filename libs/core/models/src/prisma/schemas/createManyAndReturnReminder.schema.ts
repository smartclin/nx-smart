import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderCreateManyInputObjectSchema as ReminderCreateManyInputObjectSchema } from './objects/ReminderCreateManyInput.schema';

export const ReminderCreateManyAndReturnSchema: z.ZodType<Prisma.ReminderCreateManyAndReturnArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), data: z.union([ ReminderCreateManyInputObjectSchema, z.array(ReminderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReminderCreateManyAndReturnArgs>;

export const ReminderCreateManyAndReturnZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), data: z.union([ ReminderCreateManyInputObjectSchema, z.array(ReminderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();