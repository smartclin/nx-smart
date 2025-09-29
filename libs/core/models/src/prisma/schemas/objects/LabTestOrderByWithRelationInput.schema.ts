import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServicesOrderByWithRelationInputObjectSchema as ServicesOrderByWithRelationInputObjectSchema } from './ServicesOrderByWithRelationInput.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './MedicalRecordsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  testDate: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  services: z.lazy(() => ServicesOrderByWithRelationInputObjectSchema).optional(),
  medicalRecord: z.lazy(() => MedicalRecordsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LabTestOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LabTestOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestOrderByWithRelationInput>;
export const LabTestOrderByWithRelationInputObjectZodSchema = makeSchema();
