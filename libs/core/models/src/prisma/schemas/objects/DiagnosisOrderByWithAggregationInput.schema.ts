import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DiagnosisCountOrderByAggregateInputObjectSchema as DiagnosisCountOrderByAggregateInputObjectSchema } from './DiagnosisCountOrderByAggregateInput.schema';
import { DiagnosisAvgOrderByAggregateInputObjectSchema as DiagnosisAvgOrderByAggregateInputObjectSchema } from './DiagnosisAvgOrderByAggregateInput.schema';
import { DiagnosisMaxOrderByAggregateInputObjectSchema as DiagnosisMaxOrderByAggregateInputObjectSchema } from './DiagnosisMaxOrderByAggregateInput.schema';
import { DiagnosisMinOrderByAggregateInputObjectSchema as DiagnosisMinOrderByAggregateInputObjectSchema } from './DiagnosisMinOrderByAggregateInput.schema';
import { DiagnosisSumOrderByAggregateInputObjectSchema as DiagnosisSumOrderByAggregateInputObjectSchema } from './DiagnosisSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  symptoms: SortOrderSchema.optional(),
  diagnosis: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  prescribedMedications: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  followUpPlan: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DiagnosisCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DiagnosisAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DiagnosisMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DiagnosisMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DiagnosisSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DiagnosisOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DiagnosisOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisOrderByWithAggregationInput>;
export const DiagnosisOrderByWithAggregationInputObjectZodSchema = makeSchema();
