import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  doctorId: z.string(),
  date: z.coerce.date().optional(),
  type: z.string(),
  diagnosis: z.string().optional().nullable(),
  treatment: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  medicalId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const EncounterCreateManyPatientInputObjectSchema: z.ZodType<Prisma.EncounterCreateManyPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateManyPatientInput>;
export const EncounterCreateManyPatientInputObjectZodSchema = makeSchema();
