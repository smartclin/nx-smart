import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientCountOrderByAggregateInputObjectSchema as PatientCountOrderByAggregateInputObjectSchema } from './PatientCountOrderByAggregateInput.schema';
import { PatientMaxOrderByAggregateInputObjectSchema as PatientMaxOrderByAggregateInputObjectSchema } from './PatientMaxOrderByAggregateInput.schema';
import { PatientMinOrderByAggregateInputObjectSchema as PatientMinOrderByAggregateInputObjectSchema } from './PatientMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  nutritionalStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  relation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bloodGroup: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  allergies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalConditions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalHistory: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  img: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  colorCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PatientCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PatientMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PatientMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PatientOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientOrderByWithAggregationInput>;
export const PatientOrderByWithAggregationInputObjectZodSchema = makeSchema();
