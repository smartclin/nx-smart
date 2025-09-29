import { z } from 'zod';

export const FeedingLogScalarFieldEnumSchema = z.enum(['id', 'patientId', 'date', 'type', 'duration', 'amount', 'breast', 'notes'])

export type FeedingLogScalarFieldEnum = z.infer<typeof FeedingLogScalarFieldEnumSchema>;