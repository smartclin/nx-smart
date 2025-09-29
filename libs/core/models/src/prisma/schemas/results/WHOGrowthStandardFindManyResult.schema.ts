import { z } from 'zod';
export const WHOGrowthStandardFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  ageInMonths: z.number().int(),
  gender: z.unknown(),
  measurementType: z.unknown(),
  lValue: z.number(),
  mValue: z.number(),
  sValue: z.number(),
  sd0: z.number(),
  sd1neg: z.number(),
  sd1pos: z.number(),
  sd2neg: z.number(),
  sd2pos: z.number(),
  sd3neg: z.number(),
  sd3pos: z.number(),
  sd4neg: z.number().optional(),
  sd4pos: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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