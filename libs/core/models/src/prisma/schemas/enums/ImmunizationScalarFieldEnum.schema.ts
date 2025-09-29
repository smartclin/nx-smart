import { z } from 'zod';

export const ImmunizationScalarFieldEnumSchema = z.enum(['id', 'patientId', 'vaccine', 'date', 'dose', 'lotNumber', 'administeredByStaffId', 'notes', 'createdAt'])

export type ImmunizationScalarFieldEnum = z.infer<typeof ImmunizationScalarFieldEnumSchema>;