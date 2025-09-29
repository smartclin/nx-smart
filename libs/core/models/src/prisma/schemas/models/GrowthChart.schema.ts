import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';

export const GrowthChartSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  gender: GenderSchema.nullish(),
  date: z.date(),
  ageInDays: z.number().int(),
  height: z.number(),
  weight: z.number(),
  headCircumference: z.number().nullish(),
  percentileHeight: z.number().nullish(),
  percentileWeight: z.number().nullish(),
  percentileHead: z.number().nullish(),
  measuredById: z.string().nullish(),
  heightZScore: z.number().nullish(),
  weightZScore: z.number().nullish(),
  notes: z.string().nullish(),
});

export type GrowthChartType = z.infer<typeof GrowthChartSchema>;
