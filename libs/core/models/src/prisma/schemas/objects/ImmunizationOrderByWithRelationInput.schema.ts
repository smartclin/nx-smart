import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { StaffOrderByWithRelationInputObjectSchema as StaffOrderByWithRelationInputObjectSchema } from './StaffOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  vaccine: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  dose: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lotNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  administeredByStaffId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  administeredBy: z.lazy(() => StaffOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ImmunizationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ImmunizationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationOrderByWithRelationInput>;
export const ImmunizationOrderByWithRelationInputObjectZodSchema = makeSchema();
