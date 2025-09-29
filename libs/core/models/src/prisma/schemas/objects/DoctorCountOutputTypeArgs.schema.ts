import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCountOutputTypeSelectObjectSchema as DoctorCountOutputTypeSelectObjectSchema } from './DoctorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DoctorCountOutputTypeArgsObjectSchema = makeSchema();
export const DoctorCountOutputTypeArgsObjectZodSchema = makeSchema();
