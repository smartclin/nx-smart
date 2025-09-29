import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  medicalRecordId: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  patientId: z.boolean().optional(),
  medicationName: z.boolean().optional(),
  dosage: z.boolean().optional(),
  frequency: z.boolean().optional(),
  duration: z.boolean().optional(),
  instructions: z.boolean().optional(),
  issuedDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  status: z.boolean().optional(),
  medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PrescriptionSelectObjectSchema: z.ZodType<Prisma.PrescriptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionSelect>;
export const PrescriptionSelectObjectZodSchema = makeSchema();
