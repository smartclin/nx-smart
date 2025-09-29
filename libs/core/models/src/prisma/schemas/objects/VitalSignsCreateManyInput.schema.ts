import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  encounterId: z.string().optional().nullable(),
  patientId: z.string(),
  medicalId: z.number().int(),
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
  updatedAt: z.coerce.date().optional()
}).strict();
export const VitalSignsCreateManyInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateManyInput>;
export const VitalSignsCreateManyInputObjectZodSchema = makeSchema();
