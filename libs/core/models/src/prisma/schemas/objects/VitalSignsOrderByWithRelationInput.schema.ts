import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EncounterOrderByWithRelationInputObjectSchema as EncounterOrderByWithRelationInputObjectSchema } from './EncounterOrderByWithRelationInput.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './MedicalRecordsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  encounterId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patientId: SortOrderSchema.optional(),
  medicalId: SortOrderSchema.optional(),
  height: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  weight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  temperature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  systolic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  diastolic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  heartRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  respiratoryRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  oxygenSaturation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  recordedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  encounter: z.lazy(() => EncounterOrderByWithRelationInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const VitalSignsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VitalSignsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsOrderByWithRelationInput>;
export const VitalSignsOrderByWithRelationInputObjectZodSchema = makeSchema();
