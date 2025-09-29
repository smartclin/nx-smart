import { z } from 'zod';

export const BillingScalarFieldEnumSchema = z.enum(['id', 'patientId', 'appointmentId', 'amount', 'status', 'insurance', 'insuranceId', 'serviceDate', 'dueDate', 'paidDate', 'notes', 'createdAt', 'updatedAt'])

export type BillingScalarFieldEnum = z.infer<typeof BillingScalarFieldEnumSchema>;