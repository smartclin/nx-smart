import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalRecordsCountOrderByAggregateInputObjectSchema as MedicalRecordsCountOrderByAggregateInputObjectSchema } from './MedicalRecordsCountOrderByAggregateInput.schema';
import { MedicalRecordsAvgOrderByAggregateInputObjectSchema as MedicalRecordsAvgOrderByAggregateInputObjectSchema } from './MedicalRecordsAvgOrderByAggregateInput.schema';
import { MedicalRecordsMaxOrderByAggregateInputObjectSchema as MedicalRecordsMaxOrderByAggregateInputObjectSchema } from './MedicalRecordsMaxOrderByAggregateInput.schema';
import { MedicalRecordsMinOrderByAggregateInputObjectSchema as MedicalRecordsMinOrderByAggregateInputObjectSchema } from './MedicalRecordsMinOrderByAggregateInput.schema';
import { MedicalRecordsSumOrderByAggregateInputObjectSchema as MedicalRecordsSumOrderByAggregateInputObjectSchema } from './MedicalRecordsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  treatmentPlan: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  prescriptions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  labRequest: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MedicalRecordsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MedicalRecordsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MedicalRecordsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MedicalRecordsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MedicalRecordsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MedicalRecordsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MedicalRecordsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsOrderByWithAggregationInput>;
export const MedicalRecordsOrderByWithAggregationInputObjectZodSchema = makeSchema();
