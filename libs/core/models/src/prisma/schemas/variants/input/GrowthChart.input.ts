import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const GrowthChartInputSchema = z.object({
    id: z.string(),
    patientId: z.string(),
    gender: GenderSchema.optional().nullable(),
    patient: z.unknown(),
    date: z.date(),
    ageInDays: z.number().int(),
    height: z.number(),
    weight: z.number(),
    headCircumference: z.number().optional().nullable(),
    percentileHeight: z.number().optional().nullable(),
    percentileWeight: z.number().optional().nullable(),
    percentileHead: z.number().optional().nullable(),
    measuredById: z.string().optional().nullable(),
    measuredBy: z.unknown().optional().nullable(),
    heightZScore: z.number().optional().nullable(),
    weightZScore: z.number().optional().nullable(),
    notes: z.string().optional().nullable()
}).strict();

export type GrowthChartInputType = z.infer<typeof GrowthChartInputSchema>;
