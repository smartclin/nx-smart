import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const PatientModelSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    userId: z.string(),
    user: z.unknown(),
    dateOfBirth: z.date(),
    gender: GenderSchema,
    phone: z.string().nullable(),
    email: z.string(),
    nutritionalStatus: z.string().nullable(),
    address: z.string().nullable(),
    emergencyContactName: z.string().nullable(),
    emergencyContactNumber: z.string().nullable(),
    relation: z.string().nullable(),
    bloodGroup: z.string().nullable(),
    allergies: z.string().nullable(),
    medicalConditions: z.string().nullable(),
    medicalHistory: z.string().nullable(),
    img: z.string().nullable(),
    colorCode: z.string().nullable(),
    role: RoleSchema.nullable(),
    appointments: z.array(z.unknown()),
    medical: z.array(z.unknown()),
    payments: z.array(z.unknown()),
    encounters: z.array(z.unknown()),
    immunizations: z.array(z.unknown()),
    growthCharts: z.array(z.unknown()),
    feedingLogs: z.array(z.unknown()),
    billing: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    status: z.string().nullable(),
    prescriptions: z.array(z.unknown())
}).strict();

export type PatientModelType = z.infer<typeof PatientModelSchema>;
