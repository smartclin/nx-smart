import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './MedicalRecordsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MedicalRecordsSelectObjectSchema).optional(),
  include: z.lazy(() => MedicalRecordsIncludeObjectSchema).optional()
}).strict();
export const MedicalRecordsArgsObjectSchema = makeSchema();
export const MedicalRecordsArgsObjectZodSchema = makeSchema();
