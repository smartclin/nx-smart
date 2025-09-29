import { z } from 'zod';

export const LabTestScalarFieldEnumSchema = z.enum(['id', 'recordId', 'testDate', 'result', 'status', 'notes', 'serviceId', 'createdAt', 'updatedAt'])

export type LabTestScalarFieldEnum = z.infer<typeof LabTestScalarFieldEnumSchema>;