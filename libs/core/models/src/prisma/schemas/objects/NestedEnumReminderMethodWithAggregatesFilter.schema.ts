import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReminderMethodFilterObjectSchema as NestedEnumReminderMethodFilterObjectSchema } from './NestedEnumReminderMethodFilter.schema'

const nestedenumremindermethodwithaggregatesfilterSchema = z.object({
  equals: ReminderMethodSchema.optional(),
  in: ReminderMethodSchema.array().optional(),
  notIn: ReminderMethodSchema.array().optional(),
  not: z.union([ReminderMethodSchema, z.lazy(() => NestedEnumReminderMethodWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReminderMethodFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReminderMethodFilterObjectSchema).optional()
}).strict();
export const NestedEnumReminderMethodWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumReminderMethodWithAggregatesFilter> = nestedenumremindermethodwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReminderMethodWithAggregatesFilter>;
export const NestedEnumReminderMethodWithAggregatesFilterObjectZodSchema = nestedenumremindermethodwithaggregatesfilterSchema;
