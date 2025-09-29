import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { StatusSchema } from '../enums/Status.schema';

export const StaffSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  userId: z.string(),
  address: z.string(),
  department: z.string().nullish(),
  img: z.string().nullish(),
  licenseNumber: z.string().nullish(),
  colorCode: z.string().nullish(),
  hireDate: z.date().nullish(),
  salary: z.number().nullish(),
  role: RoleSchema,
  status: StatusSchema.default("ACTIVE"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StaffType = z.infer<typeof StaffSchema>;
