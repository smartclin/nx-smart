import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './PrescriptionSelect.schema';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './PrescriptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PrescriptionSelectObjectSchema).optional(),
  include: z.lazy(() => PrescriptionIncludeObjectSchema).optional()
}).strict();
export const PrescriptionArgsObjectSchema = makeSchema();
export const PrescriptionArgsObjectZodSchema = makeSchema();
