import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './MedicalRecordsOrderByWithRelationInput.schema'

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
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DiagnosisOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DiagnosisOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisOrderByWithRelationInput>;
export const DiagnosisOrderByWithRelationInputObjectZodSchema = makeSchema();
