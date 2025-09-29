import { z } from 'zod';

export const GrowthChartScalarFieldEnumSchema = z.enum(['id', 'patientId', 'gender', 'date', 'ageInDays', 'height', 'weight', 'headCircumference', 'percentileHeight', 'percentileWeight', 'percentileHead', 'measuredById', 'heightZScore', 'weightZScore', 'notes'])

export type GrowthChartScalarFieldEnum = z.infer<typeof GrowthChartScalarFieldEnumSchema>;