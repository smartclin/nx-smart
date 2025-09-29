import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './MedicalRecordsOrderByWithRelationInput.schema';
import { VitalSignsOrderByRelationAggregateInputObjectSchema as VitalSignsOrderByRelationAggregateInputObjectSchema } from './VitalSignsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  diagnosis: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  treatment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsOrderByWithRelationInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EncounterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EncounterOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterOrderByWithRelationInput>;
export const EncounterOrderByWithRelationInputObjectZodSchema = makeSchema();
