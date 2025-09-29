import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { StaffOrderByWithRelationInputObjectSchema as StaffOrderByWithRelationInputObjectSchema } from './StaffOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  date: SortOrderSchema.optional(),
  ageInDays: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  headCircumference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileHeight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileWeight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  percentileHead: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  measuredById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  heightZScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  weightZScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  measuredBy: z.lazy(() => StaffOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GrowthChartOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GrowthChartOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartOrderByWithRelationInput>;
export const GrowthChartOrderByWithRelationInputObjectZodSchema = makeSchema();
