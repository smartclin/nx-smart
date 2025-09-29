import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { RoleSchema } from '../enums/Role.schema';

export const PatientSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  userId: z.string(),
  dateOfBirth: z.date(),
  gender: GenderSchema.default("Male"),
  phone: z.string().nullish(),
  email: z.string(),
  nutritionalStatus: z.string().nullish(),
  address: z.string().nullish(),
  emergencyContactName: z.string().nullish(),
  emergencyContactNumber: z.string().nullish(),
  relation: z.string().nullish(),
  bloodGroup: z.string().nullish(),
  allergies: z.string().nullish(),
  medicalConditions: z.string().nullish(),
  medicalHistory: z.string().nullish(),
  img: z.string().nullish(),
  colorCode: z.string().nullish(),
  role: RoleSchema.nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.string().default("active").nullish(),
});

export type PatientType = z.infer<typeof PatientSchema>;
