import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StaffCountOrderByAggregateInputObjectSchema as StaffCountOrderByAggregateInputObjectSchema } from './StaffCountOrderByAggregateInput.schema';
import { StaffAvgOrderByAggregateInputObjectSchema as StaffAvgOrderByAggregateInputObjectSchema } from './StaffAvgOrderByAggregateInput.schema';
import { StaffMaxOrderByAggregateInputObjectSchema as StaffMaxOrderByAggregateInputObjectSchema } from './StaffMaxOrderByAggregateInput.schema';
import { StaffMinOrderByAggregateInputObjectSchema as StaffMinOrderByAggregateInputObjectSchema } from './StaffMinOrderByAggregateInput.schema';
import { StaffSumOrderByAggregateInputObjectSchema as StaffSumOrderByAggregateInputObjectSchema } from './StaffSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  img: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  licenseNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  colorCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hireDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  salary: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StaffCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StaffAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StaffMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StaffMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StaffSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StaffOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StaffOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffOrderByWithAggregationInput>;
export const StaffOrderByWithAggregationInputObjectZodSchema = makeSchema();
