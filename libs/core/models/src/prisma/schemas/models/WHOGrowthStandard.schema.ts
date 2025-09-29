import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema';

export const WHOGrowthStandardSchema = z.object({
  id: z.number().int(),
  ageInMonths: z.number().int(),
  gender: GenderSchema,
  measurementType: MeasurementTypeSchema,
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
  sd4neg: z.number().nullish(),
  sd4pos: z.number().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type WHOGrowthStandardType = z.infer<typeof WHOGrowthStandardSchema>;
