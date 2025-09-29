import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  dateOfBirth: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  email: z.literal(true).optional(),
  nutritionalStatus: z.literal(true).optional(),
  address: z.literal(true).optional(),
  emergencyContactName: z.literal(true).optional(),
  emergencyContactNumber: z.literal(true).optional(),
  relation: z.literal(true).optional(),
  bloodGroup: z.literal(true).optional(),
  allergies: z.literal(true).optional(),
  medicalConditions: z.literal(true).optional(),
  medicalHistory: z.literal(true).optional(),
  img: z.literal(true).optional(),
  colorCode: z.literal(true).optional(),
  role: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const PatientMinAggregateInputObjectSchema: z.ZodType<Prisma.PatientMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PatientMinAggregateInputType>;
export const PatientMinAggregateInputObjectZodSchema = makeSchema();
