import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { NestedEnumReminderMethodWithAggregatesFilterObjectSchema as NestedEnumReminderMethodWithAggregatesFilterObjectSchema } from './NestedEnumReminderMethodWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReminderMethodFilterObjectSchema as NestedEnumReminderMethodFilterObjectSchema } from './NestedEnumReminderMethodFilter.schema'

const makeSchema = () => z.object({
  equals: ReminderMethodSchema.optional(),
  in: ReminderMethodSchema.array().optional(),
  notIn: ReminderMethodSchema.array().optional(),
  not: z.union([ReminderMethodSchema, z.lazy(() => NestedEnumReminderMethodWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReminderMethodFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReminderMethodFilterObjectSchema).optional()
}).strict();
export const EnumReminderMethodWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReminderMethodWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReminderMethodWithAggregatesFilter>;
export const EnumReminderMethodWithAggregatesFilterObjectZodSchema = makeSchema();
