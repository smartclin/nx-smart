import { z } from 'zod';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { RoleSchema } from '../enums/Role.schema';

export const DoctorSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  userId: z.string(),
  specialization: z.string(),
  licenseNumber: z.string().nullish(),
  phone: z.string().nullish(),
  address: z.string().nullish(),
  department: z.string().nullish(),
  img: z.string().nullish(),
  colorCode: z.string().nullish(),
  availabilityStatus: z.string().nullish(),
  isActive: z.boolean().nullish(),
  type: JOBTYPESchema.default("FULL"),
  role: RoleSchema.nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DoctorType = z.infer<typeof DoctorSchema>;
