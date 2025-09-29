import { z } from 'zod';
export const GrowthChartFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  patientId: z.string(),
  gender: z.unknown().optional(),
  patient: z.unknown(),
  date: z.date(),
  ageInDays: z.number().int(),
  height: z.number(),
  weight: z.number(),
  headCircumference: z.number().optional(),
  percentileHeight: z.number().optional(),
  percentileWeight: z.number().optional(),
  percentileHead: z.number().optional(),
  measuredById: z.string().optional(),
  measuredBy: z.unknown().optional(),
  heightZScore: z.number().optional(),
  weightZScore: z.number().optional(),
  notes: z.string().optional()
}));