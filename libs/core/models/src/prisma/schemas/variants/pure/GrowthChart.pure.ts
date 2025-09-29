import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const GrowthChartModelSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    gender: GenderSchema.nullable(),
    patient: z.unknown(),
    date: z.date(),
    ageInDays: z.number().int(),
    height: z.number(),
    weight: z.number(),
    headCircumference: z.number().nullable(),
    percentileHeight: z.number().nullable(),
    percentileWeight: z.number().nullable(),
    percentileHead: z.number().nullable(),
    measuredById: z.string().nullable(),
    measuredBy: z.unknown().nullable(),
    heightZScore: z.number().nullable(),
    weightZScore: z.number().nullable(),
    notes: z.string().nullable()
}).strict();

export type GrowthChartModelType = z.infer<typeof GrowthChartModelSchema>;
