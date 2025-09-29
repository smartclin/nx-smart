import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCountOutputTypeSelectObjectSchema as StaffCountOutputTypeSelectObjectSchema } from './StaffCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StaffCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StaffCountOutputTypeArgsObjectSchema = makeSchema();
export const StaffCountOutputTypeArgsObjectZodSchema = makeSchema();
