import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ImmunizationOrderByRelationAggregateInputObjectSchema as ImmunizationOrderByRelationAggregateInputObjectSchema } from './ImmunizationOrderByRelationAggregateInput.schema';
import { GrowthChartOrderByRelationAggregateInputObjectSchema as GrowthChartOrderByRelationAggregateInputObjectSchema } from './GrowthChartOrderByRelationAggregateInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  immunizations: z.lazy(() => ImmunizationOrderByRelationAggregateInputObjectSchema).optional(),
  GrowthChart: z.lazy(() => GrowthChartOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StaffOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StaffOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffOrderByWithRelationInput>;
export const StaffOrderByWithRelationInputObjectZodSchema = makeSchema();
