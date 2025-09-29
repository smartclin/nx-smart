import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateNestedOneWithoutEncountersInputObjectSchema as PatientCreateNestedOneWithoutEncountersInputObjectSchema } from './PatientCreateNestedOneWithoutEncountersInput.schema';
import { DoctorCreateNestedOneWithoutEncounterInputObjectSchema as DoctorCreateNestedOneWithoutEncounterInputObjectSchema } from './DoctorCreateNestedOneWithoutEncounterInput.schema';
import { MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema as MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  date: z.coerce.date().optional(),
  type: z.string(),
  diagnosis: z.string().optional().nullable(),
  treatment: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutEncountersInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutEncounterInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema)
}).strict();
export const EncounterCreateWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.EncounterCreateWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateWithoutVitalSignsInput>;
export const EncounterCreateWithoutVitalSignsInputObjectZodSchema = makeSchema();
