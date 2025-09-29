import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutPrescriptionsListInput.schema';
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
  medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutPrescriptionInputObjectSchema).optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema)
}).strict();
export const PrescriptionCreateInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateInput>;
export const PrescriptionCreateInputObjectZodSchema = makeSchema();
