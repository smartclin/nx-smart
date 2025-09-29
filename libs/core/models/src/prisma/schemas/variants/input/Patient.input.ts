import { z } from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const PatientInputSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    userId: z.string(),
    user: z.unknown(),
    dateOfBirth: z.date(),
    gender: GenderSchema,
    phone: z.string().optional().nullable(),
    email: z.string(),
    nutritionalStatus: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    emergencyContactName: z.string().optional().nullable(),
    emergencyContactNumber: z.string().optional().nullable(),
    relation: z.string().optional().nullable(),
    bloodGroup: z.string().optional().nullable(),
    allergies: z.string().optional().nullable(),
    medicalConditions: z.string().optional().nullable(),
    medicalHistory: z.string().optional().nullable(),
    img: z.string().optional().nullable(),
    colorCode: z.string().optional().nullable(),
    role: RoleSchema.optional().nullable(),
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
    status: z.string().optional().nullable(),
    prescriptions: z.array(z.unknown())
}).strict();

export type PatientInputType = z.infer<typeof PatientInputSchema>;
