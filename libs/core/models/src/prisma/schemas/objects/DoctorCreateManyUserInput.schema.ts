import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string(),
  specialization: z.string(),
  licenseNumber: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  department: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  colorCode: z.string().optional().nullable(),
  availabilityStatus: z.string().optional().nullable(),
  isActive: z.boolean().optional().nullable(),
  type: JOBTYPESchema.optional(),
  role: RoleSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DoctorCreateManyUserInputObjectSchema: z.ZodType<Prisma.DoctorCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateManyUserInput>;
export const DoctorCreateManyUserInputObjectZodSchema = makeSchema();
