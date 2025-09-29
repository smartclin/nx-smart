import { z } from 'zod';

export const EncounterScalarFieldEnumSchema = z.enum(['id', 'patientId', 'doctorId', 'date', 'type', 'diagnosis', 'treatment', 'notes', 'medicalId', 'createdAt', 'updatedAt'])

export type EncounterScalarFieldEnum = z.infer<typeof EncounterScalarFieldEnumSchema>;