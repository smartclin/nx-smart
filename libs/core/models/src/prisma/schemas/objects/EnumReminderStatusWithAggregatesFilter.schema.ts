import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';
import { NestedEnumReminderStatusWithAggregatesFilterObjectSchema as NestedEnumReminderStatusWithAggregatesFilterObjectSchema } from './NestedEnumReminderStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReminderStatusFilterObjectSchema as NestedEnumReminderStatusFilterObjectSchema } from './NestedEnumReminderStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReminderStatusSchema.optional(),
  in: ReminderStatusSchema.array().optional(),
  notIn: ReminderStatusSchema.array().optional(),
  not: z.union([ReminderStatusSchema, z.lazy(() => NestedEnumReminderStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReminderStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReminderStatusFilterObjectSchema).optional()
}).strict();
export const EnumReminderStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReminderStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderStatusWithAggregatesFilter>;
export const EnumReminderStatusWithAggregatesFilterObjectZodSchema = makeSchema();
