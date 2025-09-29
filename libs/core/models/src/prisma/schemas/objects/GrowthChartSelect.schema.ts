import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { StaffArgsObjectSchema as StaffArgsObjectSchema } from './StaffArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  gender: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  date: z.boolean().optional(),
  ageInDays: z.boolean().optional(),
  height: z.boolean().optional(),
  weight: z.boolean().optional(),
  headCircumference: z.boolean().optional(),
  percentileHeight: z.boolean().optional(),
  percentileWeight: z.boolean().optional(),
  percentileHead: z.boolean().optional(),
  measuredById: z.boolean().optional(),
  measuredBy: z.union([z.boolean(), z.lazy(() => StaffArgsObjectSchema)]).optional(),
  heightZScore: z.boolean().optional(),
  weightZScore: z.boolean().optional(),
  notes: z.boolean().optional()
}).strict();
export const GrowthChartSelectObjectSchema: z.ZodType<Prisma.GrowthChartSelect> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartSelect>;
export const GrowthChartSelectObjectZodSchema = makeSchema();
