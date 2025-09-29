import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './WorkingDaysInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkingDaysSelectObjectSchema).optional(),
  include: z.lazy(() => WorkingDaysIncludeObjectSchema).optional()
}).strict();
export const WorkingDaysArgsObjectSchema = makeSchema();
export const WorkingDaysArgsObjectZodSchema = makeSchema();
