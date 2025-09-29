import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './AppointmentOrderByWithRelationInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { LabTestOrderByRelationAggregateInputObjectSchema as LabTestOrderByRelationAggregateInputObjectSchema } from './LabTestOrderByRelationAggregateInput.schema';
import { EncounterOrderByRelationAggregateInputObjectSchema as EncounterOrderByRelationAggregateInputObjectSchema } from './EncounterOrderByRelationAggregateInput.schema';
import { DiagnosisOrderByRelationAggregateInputObjectSchema as DiagnosisOrderByRelationAggregateInputObjectSchema } from './DiagnosisOrderByRelationAggregateInput.schema';
import { PrescriptionOrderByRelationAggregateInputObjectSchema as PrescriptionOrderByRelationAggregateInputObjectSchema } from './PrescriptionOrderByRelationAggregateInput.schema';
import { VitalSignsOrderByRelationAggregateInputObjectSchema as VitalSignsOrderByRelationAggregateInputObjectSchema } from './VitalSignsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  treatmentPlan: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  prescriptions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  labRequest: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputObjectSchema).optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  labTests: z.lazy(() => LabTestOrderByRelationAggregateInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterOrderByRelationAggregateInputObjectSchema).optional(),
  diagnoses: z.lazy(() => DiagnosisOrderByRelationAggregateInputObjectSchema).optional(),
  prescriptionsList: z.lazy(() => PrescriptionOrderByRelationAggregateInputObjectSchema).optional(),
  vitalSigns: z.lazy(() => VitalSignsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MedicalRecordsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MedicalRecordsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsOrderByWithRelationInput>;
export const MedicalRecordsOrderByWithRelationInputObjectZodSchema = makeSchema();
