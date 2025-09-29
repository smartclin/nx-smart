import { z } from 'zod';

import { JOBTYPESchema } from '../../enums/JOBTYPE.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const DoctorResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    userId: z.string(),
    user: z.unknown(),
    specialization: z.string(),
    licenseNumber: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    department: z.string().nullable(),
    img: z.string().nullable(),
    colorCode: z.string().nullable(),
    availabilityStatus: z.string().nullable(),
    isActive: z.boolean().nullable(),
    type: JOBTYPESchema,
    workingDays: z.array(z.unknown()),
    appointments: z.array(z.unknown()),
    diagnosis: z.array(z.unknown()),
    role: RoleSchema.nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Prescription: z.array(z.unknown()),
    Encounter: z.array(z.unknown()),
    MedicalRecords: z.array(z.unknown())
}).strict();

export type DoctorResultType = z.infer<typeof DoctorResultSchema>;
