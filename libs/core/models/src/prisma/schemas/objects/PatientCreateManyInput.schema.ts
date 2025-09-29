import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  userId: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: GenderSchema.optional(),
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.string().optional().nullable()
}).strict();
export const PatientCreateManyInputObjectSchema: z.ZodType<Prisma.PatientCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateManyInput>;
export const PatientCreateManyInputObjectZodSchema = makeSchema();
