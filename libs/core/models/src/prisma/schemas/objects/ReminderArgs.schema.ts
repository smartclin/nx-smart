import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderSelectObjectSchema as ReminderSelectObjectSchema } from './ReminderSelect.schema';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './ReminderInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReminderSelectObjectSchema).optional(),
  include: z.lazy(() => ReminderIncludeObjectSchema).optional()
}).strict();
export const ReminderArgsObjectSchema = makeSchema();
export const ReminderArgsObjectZodSchema = makeSchema();
