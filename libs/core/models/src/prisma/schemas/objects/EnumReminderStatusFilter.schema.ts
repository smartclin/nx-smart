import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';
import { NestedEnumReminderStatusFilterObjectSchema as NestedEnumReminderStatusFilterObjectSchema } from './NestedEnumReminderStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReminderStatusSchema.optional(),
  in: ReminderStatusSchema.array().optional(),
  notIn: ReminderStatusSchema.array().optional(),
  not: z.union([ReminderStatusSchema, z.lazy(() => NestedEnumReminderStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumReminderStatusFilterObjectSchema: z.ZodType<Prisma.EnumReminderStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderStatusFilter>;
export const EnumReminderStatusFilterObjectZodSchema = makeSchema();
