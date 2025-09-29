import { z } from 'zod';

export const WorkingDaysScalarFieldEnumSchema = z.enum(['id', 'doctorId', 'day', 'startTime', 'closeTime', 'createdAt', 'updatedAt'])

export type WorkingDaysScalarFieldEnum = z.infer<typeof WorkingDaysScalarFieldEnumSchema>;