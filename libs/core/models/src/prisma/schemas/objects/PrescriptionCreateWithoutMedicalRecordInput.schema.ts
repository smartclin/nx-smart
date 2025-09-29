import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateNestedOneWithoutPrescriptionInputObjectSchema as DoctorCreateNestedOneWithoutPrescriptionInputObjectSchema } from './DoctorCreateNestedOneWithoutPrescriptionInput.schema';
import { PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema as PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema } from './PatientCreateNestedOneWithoutPrescriptionsInput.schema'

const makeSchema = () => z.object({
  medicationName: z.string(),
  dosage: z.string(),
  frequency: z.string(),
  duration: z.string(),
  instructions: z.string().optional().nullable(),
  issuedDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutPrescriptionInputObjectSchema).optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema)
}).strict();
export const PrescriptionCreateWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateWithoutMedicalRecordInput>;
export const PrescriptionCreateWithoutMedicalRecordInputObjectZodSchema = makeSchema();
