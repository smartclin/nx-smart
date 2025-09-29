import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { LabTestFindManySchema as LabTestFindManySchema } from '../findManyLabTest.schema';
import { EncounterFindManySchema as EncounterFindManySchema } from '../findManyEncounter.schema';
import { DiagnosisFindManySchema as DiagnosisFindManySchema } from '../findManyDiagnosis.schema';
import { PrescriptionFindManySchema as PrescriptionFindManySchema } from '../findManyPrescription.schema';
import { VitalSignsFindManySchema as VitalSignsFindManySchema } from '../findManyVitalSigns.schema';
import { MedicalRecordsCountOutputTypeArgsObjectSchema as MedicalRecordsCountOutputTypeArgsObjectSchema } from './MedicalRecordsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  appointmentId: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  treatmentPlan: z.boolean().optional(),
  prescriptions: z.boolean().optional(),
  labRequest: z.boolean().optional(),
  notes: z.boolean().optional(),
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  labTests: z.union([z.boolean(), z.lazy(() => LabTestFindManySchema)]).optional(),
  encounters: z.union([z.boolean(), z.lazy(() => EncounterFindManySchema)]).optional(),
  diagnoses: z.union([z.boolean(), z.lazy(() => DiagnosisFindManySchema)]).optional(),
  prescriptionsList: z.union([z.boolean(), z.lazy(() => PrescriptionFindManySchema)]).optional(),
  vitalSigns: z.union([z.boolean(), z.lazy(() => VitalSignsFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MedicalRecordsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MedicalRecordsSelectObjectSchema: z.ZodType<Prisma.MedicalRecordsSelect> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsSelect>;
export const MedicalRecordsSelectObjectZodSchema = makeSchema();
