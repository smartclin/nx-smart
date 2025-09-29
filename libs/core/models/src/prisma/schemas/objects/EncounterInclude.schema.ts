import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema';
import { VitalSignsFindManySchema as VitalSignsFindManySchema } from '../findManyVitalSigns.schema';
import { EncounterCountOutputTypeArgsObjectSchema as EncounterCountOutputTypeArgsObjectSchema } from './EncounterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  vitalSigns: z.union([z.boolean(), z.lazy(() => VitalSignsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EncounterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EncounterIncludeObjectSchema: z.ZodType<Prisma.EncounterInclude> = makeSchema() as unknown as z.ZodType<Prisma.EncounterInclude>;
export const EncounterIncludeObjectZodSchema = makeSchema();
