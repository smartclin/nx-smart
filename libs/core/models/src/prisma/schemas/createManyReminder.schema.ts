import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderCreateManyInputObjectSchema as ReminderCreateManyInputObjectSchema } from './objects/ReminderCreateManyInput.schema';

export const ReminderCreateManySchema: z.ZodType<Prisma.ReminderCreateManyArgs> = z.object({ data: z.union([ ReminderCreateManyInputObjectSchema, z.array(ReminderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReminderCreateManyArgs>;

export const ReminderCreateManyZodSchema = z.object({ data: z.union([ ReminderCreateManyInputObjectSchema, z.array(ReminderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();