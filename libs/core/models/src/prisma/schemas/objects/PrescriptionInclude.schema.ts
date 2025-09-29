import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema'

const makeSchema = () => z.object({
  medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional()
}).strict();
export const PrescriptionIncludeObjectSchema: z.ZodType<Prisma.PrescriptionInclude> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionInclude>;
export const PrescriptionIncludeObjectZodSchema = makeSchema();
