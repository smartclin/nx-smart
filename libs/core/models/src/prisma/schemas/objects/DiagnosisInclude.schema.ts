import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional()
}).strict();
export const DiagnosisIncludeObjectSchema: z.ZodType<Prisma.DiagnosisInclude> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisInclude>;
export const DiagnosisIncludeObjectZodSchema = makeSchema();
