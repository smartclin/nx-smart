import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema'

const nestedenumremindermethodfilterSchema = z.object({
  equals: ReminderMethodSchema.optional(),
  in: ReminderMethodSchema.array().optional(),
  notIn: ReminderMethodSchema.array().optional(),
  not: z.union([ReminderMethodSchema, z.lazy(() => NestedEnumReminderMethodFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReminderMethodFilterObjectSchema: z.ZodType<Prisma.NestedEnumReminderMethodFilter> = nestedenumremindermethodfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReminderMethodFilter>;
export const NestedEnumReminderMethodFilterObjectZodSchema = nestedenumremindermethodfilterSchema;
