import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutPrescriptionsListInput.schema';
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
  medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema)
}).strict();
export const PrescriptionCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateWithoutDoctorInput>;
export const PrescriptionCreateWithoutDoctorInputObjectZodSchema = makeSchema();
