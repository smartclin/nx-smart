import { z } from 'zod';

export const MeasurementTypeSchema = z.enum(['WFA', 'HFA', 'HcFA'])

export type MeasurementType = z.infer<typeof MeasurementTypeSchema>;