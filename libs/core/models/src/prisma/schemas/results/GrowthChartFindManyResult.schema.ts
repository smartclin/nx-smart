import { z } from 'zod';
export const GrowthChartFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});