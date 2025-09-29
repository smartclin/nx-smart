import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateNestedOneWithoutEncountersInputObjectSchema as PatientCreateNestedOneWithoutEncountersInputObjectSchema } from './PatientCreateNestedOneWithoutEncountersInput.schema';
import { DoctorCreateNestedOneWithoutEncounterInputObjectSchema as DoctorCreateNestedOneWithoutEncounterInputObjectSchema } from './DoctorCreateNestedOneWithoutEncounterInput.schema';
import { MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema as MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutEncountersInput.schema';
import { VitalSignsCreateNestedManyWithoutEncounterInputObjectSchema as VitalSignsCreateNestedManyWithoutEncounterInputObjectSchema } from './VitalSignsCreateNestedManyWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  date: z.coerce.date().optional(),
  type: z.string(),
  diagnosis: z.string().optional().nullable(),
  treatment: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutEncountersInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutEncounterInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema),
  vitalSigns: z.lazy(() => VitalSignsCreateNestedManyWithoutEncounterInputObjectSchema)
}).strict();
export const EncounterCreateInputObjectSchema: z.ZodType<Prisma.EncounterCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateInput>;
export const EncounterCreateInputObjectZodSchema = makeSchema();
