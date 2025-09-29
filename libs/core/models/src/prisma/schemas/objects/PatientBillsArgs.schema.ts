import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsSelectObjectSchema as PatientBillsSelectObjectSchema } from './PatientBillsSelect.schema';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './PatientBillsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PatientBillsSelectObjectSchema).optional(),
  include: z.lazy(() => PatientBillsIncludeObjectSchema).optional()
}).strict();
export const PatientBillsArgsObjectSchema = makeSchema();
export const PatientBillsArgsObjectZodSchema = makeSchema();
