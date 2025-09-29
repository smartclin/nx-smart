import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './DoctorSelect.schema';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './DoctorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorIncludeObjectSchema).optional()
}).strict();
export const DoctorArgsObjectSchema = makeSchema();
export const DoctorArgsObjectZodSchema = makeSchema();
