import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './MedicalRecordsOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema'

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
  medicalRecord: z.lazy(() => MedicalRecordsOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PrescriptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PrescriptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionOrderByWithRelationInput>;
export const PrescriptionOrderByWithRelationInputObjectZodSchema = makeSchema();
