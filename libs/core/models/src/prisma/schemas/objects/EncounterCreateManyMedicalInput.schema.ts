import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  doctorId: z.string(),
  date: z.coerce.date().optional(),
  type: z.string(),
  diagnosis: z.string().optional().nullable(),
  treatment: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const EncounterCreateManyMedicalInputObjectSchema: z.ZodType<Prisma.EncounterCreateManyMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateManyMedicalInput>;
export const EncounterCreateManyMedicalInputObjectZodSchema = makeSchema();
