import { z } from 'zod';

export const DoctorScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'userId', 'specialization', 'licenseNumber', 'phone', 'address', 'department', 'img', 'colorCode', 'availabilityStatus', 'isActive', 'type', 'role', 'createdAt', 'updatedAt'])

export type DoctorScalarFieldEnum = z.infer<typeof DoctorScalarFieldEnumSchema>;