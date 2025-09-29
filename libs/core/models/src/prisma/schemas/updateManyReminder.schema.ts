import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderUpdateManyMutationInputObjectSchema as ReminderUpdateManyMutationInputObjectSchema } from './objects/ReminderUpdateManyMutationInput.schema';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema';

export const ReminderUpdateManySchema: z.ZodType<Prisma.ReminderUpdateManyArgs> = z.object({ data: ReminderUpdateManyMutationInputObjectSchema, where: ReminderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReminderUpdateManyArgs>;

export const ReminderUpdateManyZodSchema = z.object({ data: ReminderUpdateManyMutationInputObjectSchema, where: ReminderWhereInputObjectSchema.optional() }).strict();