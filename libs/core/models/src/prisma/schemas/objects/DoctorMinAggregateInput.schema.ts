import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  specialization: z.literal(true).optional(),
  licenseNumber: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  address: z.literal(true).optional(),
  department: z.literal(true).optional(),
  img: z.literal(true).optional(),
  colorCode: z.literal(true).optional(),
  availabilityStatus: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  type: z.literal(true).optional(),
  role: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DoctorMinAggregateInputObjectSchema: z.ZodType<Prisma.DoctorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DoctorMinAggregateInputType>;
export const DoctorMinAggregateInputObjectZodSchema = makeSchema();
