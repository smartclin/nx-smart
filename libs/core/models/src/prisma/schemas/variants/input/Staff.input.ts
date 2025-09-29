import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
import { StatusSchema } from '../../enums/Status.schema';
// prettier-ignore
export const StaffInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    phone: z.string(),
    userId: z.string(),
    user: z.unknown(),
    address: z.string(),
    department: z.string().optional().nullable(),
    img: z.string().optional().nullable(),
    licenseNumber: z.string().optional().nullable(),
    colorCode: z.string().optional().nullable(),
    hireDate: z.date().optional().nullable(),
    salary: z.number().optional().nullable(),
    role: RoleSchema,
    status: StatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    immunizations: z.array(z.unknown()),
    GrowthChart: z.array(z.unknown())
}).strict();

export type StaffInputType = z.infer<typeof StaffInputSchema>;
