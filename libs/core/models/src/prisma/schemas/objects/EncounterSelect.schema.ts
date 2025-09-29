import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema';
import { VitalSignsFindManySchema as VitalSignsFindManySchema } from '../findManyVitalSigns.schema';
import { EncounterCountOutputTypeArgsObjectSchema as EncounterCountOutputTypeArgsObjectSchema } from './EncounterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  doctorId: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  diagnosis: z.boolean().optional(),
  treatment: z.boolean().optional(),
  notes: z.boolean().optional(),
  medicalId: z.boolean().optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  vitalSigns: z.union([z.boolean(), z.lazy(() => VitalSignsFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => EncounterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EncounterSelectObjectSchema: z.ZodType<Prisma.EncounterSelect> = makeSchema() as unknown as z.ZodType<Prisma.EncounterSelect>;
export const EncounterSelectObjectZodSchema = makeSchema();
