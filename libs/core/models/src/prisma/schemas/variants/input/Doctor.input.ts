import { z } from 'zod';

import { JOBTYPESchema } from '../../enums/JOBTYPE.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const DoctorInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    userId: z.string(),
    user: z.unknown(),
    specialization: z.string(),
    licenseNumber: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    department: z.string().optional().nullable(),
    img: z.string().optional().nullable(),
    colorCode: z.string().optional().nullable(),
    availabilityStatus: z.string().optional().nullable(),
    isActive: z.boolean().optional().nullable(),
    type: JOBTYPESchema,
    workingDays: z.array(z.unknown()),
    appointments: z.array(z.unknown()),
    diagnosis: z.array(z.unknown()),
    role: RoleSchema.optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Prescription: z.array(z.unknown()),
    Encounter: z.array(z.unknown()),
    MedicalRecords: z.array(z.unknown())
}).strict();

export type DoctorInputType = z.infer<typeof DoctorInputSchema>;
