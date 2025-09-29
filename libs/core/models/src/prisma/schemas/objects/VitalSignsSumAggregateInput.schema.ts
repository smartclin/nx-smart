import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  medicalId: z.literal(true).optional(),
  height: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  temperature: z.literal(true).optional(),
  systolic: z.literal(true).optional(),
  diastolic: z.literal(true).optional(),
  heartRate: z.literal(true).optional(),
  respiratoryRate: z.literal(true).optional(),
  oxygenSaturation: z.literal(true).optional()
}).strict();
export const VitalSignsSumAggregateInputObjectSchema: z.ZodType<Prisma.VitalSignsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsSumAggregateInputType>;
export const VitalSignsSumAggregateInputObjectZodSchema = makeSchema();
