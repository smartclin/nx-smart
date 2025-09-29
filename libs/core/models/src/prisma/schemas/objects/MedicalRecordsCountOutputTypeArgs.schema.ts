import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCountOutputTypeSelectObjectSchema as MedicalRecordsCountOutputTypeSelectObjectSchema } from './MedicalRecordsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MedicalRecordsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MedicalRecordsCountOutputTypeArgsObjectSchema = makeSchema();
export const MedicalRecordsCountOutputTypeArgsObjectZodSchema = makeSchema();
