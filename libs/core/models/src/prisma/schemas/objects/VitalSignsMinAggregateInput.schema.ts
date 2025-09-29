import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  encounterId: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  medicalId: z.literal(true).optional(),
  height: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  temperature: z.literal(true).optional(),
  systolic: z.literal(true).optional(),
  diastolic: z.literal(true).optional(),
  heartRate: z.literal(true).optional(),
  respiratoryRate: z.literal(true).optional(),
  oxygenSaturation: z.literal(true).optional(),
  recordedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VitalSignsMinAggregateInputObjectSchema: z.ZodType<Prisma.VitalSignsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsMinAggregateInputType>;
export const VitalSignsMinAggregateInputObjectZodSchema = makeSchema();
