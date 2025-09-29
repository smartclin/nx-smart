import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsUncheckedCreateNestedManyWithoutEncounterInputObjectSchema as VitalSignsUncheckedCreateNestedManyWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedCreateNestedManyWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  doctorId: z.string(),
  date: z.coerce.date().optional(),
  type: z.string(),
  diagnosis: z.string().optional().nullable(),
  treatment: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  medicalId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  vitalSigns: z.lazy(() => VitalSignsUncheckedCreateNestedManyWithoutEncounterInputObjectSchema)
}).strict();
export const EncounterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EncounterUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUncheckedCreateInput>;
export const EncounterUncheckedCreateInputObjectZodSchema = makeSchema();
