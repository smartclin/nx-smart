import { z } from 'zod';

export const PatientScalarFieldEnumSchema = z.enum(['id', 'firstName', 'lastName', 'userId', 'dateOfBirth', 'gender', 'phone', 'email', 'nutritionalStatus', 'address', 'emergencyContactName', 'emergencyContactNumber', 'relation', 'bloodGroup', 'allergies', 'medicalConditions', 'medicalHistory', 'img', 'colorCode', 'role', 'createdAt', 'updatedAt', 'status'])

export type PatientScalarFieldEnum = z.infer<typeof PatientScalarFieldEnumSchema>;