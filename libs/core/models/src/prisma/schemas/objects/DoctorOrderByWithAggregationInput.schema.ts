import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCountOrderByAggregateInputObjectSchema as DoctorCountOrderByAggregateInputObjectSchema } from './DoctorCountOrderByAggregateInput.schema';
import { DoctorMaxOrderByAggregateInputObjectSchema as DoctorMaxOrderByAggregateInputObjectSchema } from './DoctorMaxOrderByAggregateInput.schema';
import { DoctorMinOrderByAggregateInputObjectSchema as DoctorMinOrderByAggregateInputObjectSchema } from './DoctorMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  specialization: SortOrderSchema.optional(),
  licenseNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  img: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  colorCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  availabilityStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DoctorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorOrderByWithAggregationInput>;
export const DoctorOrderByWithAggregationInputObjectZodSchema = makeSchema();
