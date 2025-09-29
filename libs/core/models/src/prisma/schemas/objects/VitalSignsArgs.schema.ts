import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsSelectObjectSchema as VitalSignsSelectObjectSchema } from './VitalSignsSelect.schema';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './VitalSignsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VitalSignsSelectObjectSchema).optional(),
  include: z.lazy(() => VitalSignsIncludeObjectSchema).optional()
}).strict();
export const VitalSignsArgsObjectSchema = makeSchema();
export const VitalSignsArgsObjectZodSchema = makeSchema();
