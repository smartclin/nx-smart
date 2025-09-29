import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { NestedEnumReminderMethodFilterObjectSchema as NestedEnumReminderMethodFilterObjectSchema } from './NestedEnumReminderMethodFilter.schema'

const makeSchema = () => z.object({
  equals: ReminderMethodSchema.optional(),
  in: ReminderMethodSchema.array().optional(),
  notIn: ReminderMethodSchema.array().optional(),
  not: z.union([ReminderMethodSchema, z.lazy(() => NestedEnumReminderMethodFilterObjectSchema)]).optional()
}).strict();
export const EnumReminderMethodFilterObjectSchema: z.ZodType<Prisma.EnumReminderMethodFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderMethodFilter>;
export const EnumReminderMethodFilterObjectZodSchema = makeSchema();
