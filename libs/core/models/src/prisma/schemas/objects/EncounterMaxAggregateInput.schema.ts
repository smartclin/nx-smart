import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  date: z.literal(true).optional(),
  type: z.literal(true).optional(),
  diagnosis: z.literal(true).optional(),
  treatment: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  medicalId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const EncounterMaxAggregateInputObjectSchema: z.ZodType<Prisma.EncounterMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EncounterMaxAggregateInputType>;
export const EncounterMaxAggregateInputObjectZodSchema = makeSchema();
