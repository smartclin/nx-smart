import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
import { MeasurementTypeSchema } from '../../enums/MeasurementType.schema';
// prettier-ignore
export const WHOGrowthStandardInputSchema = z.object({
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
    sd4neg: z.number().optional().nullable(),
    sd4pos: z.number().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WHOGrowthStandardInputType = z.infer<typeof WHOGrowthStandardInputSchema>;
