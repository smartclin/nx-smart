import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateNestedOneWithoutVitalSignsInputObjectSchema as EncounterCreateNestedOneWithoutVitalSignsInputObjectSchema } from './EncounterCreateNestedOneWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  height: z.number().optional().nullable(),
  weight: z.number().optional().nullable(),
  temperature: z.number().optional().nullable(),
  systolic: z.number().int().optional().nullable(),
  diastolic: z.number().int().optional().nullable(),
  heartRate: z.number().int().optional().nullable(),
  respiratoryRate: z.number().int().optional().nullable(),
  oxygenSaturation: z.number().int().optional().nullable(),
  recordedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  encounter: z.lazy(() => EncounterCreateNestedOneWithoutVitalSignsInputObjectSchema).optional()
}).strict();
export const VitalSignsCreateWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateWithoutMedicalInput>;
export const VitalSignsCreateWithoutMedicalInputObjectZodSchema = makeSchema();
