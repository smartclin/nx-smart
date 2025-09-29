import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema'

const nestedenumreminderstatusfilterSchema = z.object({
  equals: ReminderStatusSchema.optional(),
  in: ReminderStatusSchema.array().optional(),
  notIn: ReminderStatusSchema.array().optional(),
  not: z.union([ReminderStatusSchema, z.lazy(() => NestedEnumReminderStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReminderStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumReminderStatusFilter> = nestedenumreminderstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReminderStatusFilter>;
export const NestedEnumReminderStatusFilterObjectZodSchema = nestedenumreminderstatusfilterSchema;
