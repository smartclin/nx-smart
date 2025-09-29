import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PrescriptionCountOrderByAggregateInputObjectSchema as PrescriptionCountOrderByAggregateInputObjectSchema } from './PrescriptionCountOrderByAggregateInput.schema';
import { PrescriptionAvgOrderByAggregateInputObjectSchema as PrescriptionAvgOrderByAggregateInputObjectSchema } from './PrescriptionAvgOrderByAggregateInput.schema';
import { PrescriptionMaxOrderByAggregateInputObjectSchema as PrescriptionMaxOrderByAggregateInputObjectSchema } from './PrescriptionMaxOrderByAggregateInput.schema';
import { PrescriptionMinOrderByAggregateInputObjectSchema as PrescriptionMinOrderByAggregateInputObjectSchema } from './PrescriptionMinOrderByAggregateInput.schema';
import { PrescriptionSumOrderByAggregateInputObjectSchema as PrescriptionSumOrderByAggregateInputObjectSchema } from './PrescriptionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  medicalRecordId: SortOrderSchema.optional(),
  doctorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patientId: SortOrderSchema.optional(),
  medicationName: SortOrderSchema.optional(),
  dosage: SortOrderSchema.optional(),
  frequency: SortOrderSchema.optional(),
  duration: SortOrderSchema.optional(),
  instructions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  issuedDate: SortOrderSchema.optional(),
  endDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PrescriptionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PrescriptionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PrescriptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PrescriptionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PrescriptionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PrescriptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PrescriptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionOrderByWithAggregationInput>;
export const PrescriptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
