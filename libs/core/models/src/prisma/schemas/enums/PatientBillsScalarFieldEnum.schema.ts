import { z } from 'zod';

export const PatientBillsScalarFieldEnumSchema = z.enum(['id', 'billId', 'serviceId', 'serviceDate', 'quantity', 'unitCost', 'totalCost', 'createdAt', 'updatedAt'])

export type PatientBillsScalarFieldEnum = z.infer<typeof PatientBillsScalarFieldEnumSchema>;