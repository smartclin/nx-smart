import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nutritionalStatus: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  emergencyContactName: SortOrderSchema.optional(),
  emergencyContactNumber: SortOrderSchema.optional(),
  relation: SortOrderSchema.optional(),
  bloodGroup: SortOrderSchema.optional(),
  allergies: SortOrderSchema.optional(),
  medicalConditions: SortOrderSchema.optional(),
  medicalHistory: SortOrderSchema.optional(),
  img: SortOrderSchema.optional(),
  colorCode: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const PatientMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PatientMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientMinOrderByAggregateInput>;
export const PatientMinOrderByAggregateInputObjectZodSchema = makeSchema();
