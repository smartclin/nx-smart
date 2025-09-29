import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './objects/ReminderSelect.schema';
import { ReminderUpdateManyMutationInputObjectSchema as ReminderUpdateManyMutationInputObjectSchema } from './objects/ReminderUpdateManyMutationInput.schema';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema';

export const ReminderUpdateManyAndReturnSchema: z.ZodType<Prisma.ReminderUpdateManyAndReturnArgs> = z.object({ select: ReminderSelectObjectSchema.optional(), data: ReminderUpdateManyMutationInputObjectSchema, where: ReminderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReminderUpdateManyAndReturnArgs>;

export const ReminderUpdateManyAndReturnZodSchema = z.object({ select: ReminderSelectObjectSchema.optional(), data: ReminderUpdateManyMutationInputObjectSchema, where: ReminderWhereInputObjectSchema.optional() }).strict();