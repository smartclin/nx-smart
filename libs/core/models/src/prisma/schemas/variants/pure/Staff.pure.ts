import { z } from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
import { StatusSchema } from '../../enums/Status.schema';
// prettier-ignore
export const StaffModelSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    phone: z.string(),
    userId: z.string(),
    user: z.unknown(),
    address: z.string(),
    department: z.string().nullable(),
    img: z.string().nullable(),
    licenseNumber: z.string().nullable(),
    colorCode: z.string().nullable(),
    hireDate: z.date().nullable(),
    salary: z.number().nullable(),
    role: RoleSchema,
    status: StatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    immunizations: z.array(z.unknown()),
    GrowthChart: z.array(z.unknown())
}).strict();

export type StaffModelType = z.infer<typeof StaffModelSchema>;
