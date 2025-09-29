import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './LabTestInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LabTestSelectObjectSchema).optional(),
  include: z.lazy(() => LabTestIncludeObjectSchema).optional()
}).strict();
export const LabTestArgsObjectSchema = makeSchema();
export const LabTestArgsObjectZodSchema = makeSchema();
