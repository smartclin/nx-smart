import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { WorkingDaysOrderByRelationAggregateInputObjectSchema as WorkingDaysOrderByRelationAggregateInputObjectSchema } from './WorkingDaysOrderByRelationAggregateInput.schema';
import { AppointmentOrderByRelationAggregateInputObjectSchema as AppointmentOrderByRelationAggregateInputObjectSchema } from './AppointmentOrderByRelationAggregateInput.schema';
import { DiagnosisOrderByRelationAggregateInputObjectSchema as DiagnosisOrderByRelationAggregateInputObjectSchema } from './DiagnosisOrderByRelationAggregateInput.schema';
import { PrescriptionOrderByRelationAggregateInputObjectSchema as PrescriptionOrderByRelationAggregateInputObjectSchema } from './PrescriptionOrderByRelationAggregateInput.schema';
import { EncounterOrderByRelationAggregateInputObjectSchema as EncounterOrderByRelationAggregateInputObjectSchema } from './EncounterOrderByRelationAggregateInput.schema';
import { MedicalRecordsOrderByRelationAggregateInputObjectSchema as MedicalRecordsOrderByRelationAggregateInputObjectSchema } from './MedicalRecordsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  specialization: SortOrderSchema.optional(),
  licenseNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  img: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  colorCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  availabilityStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  workingDays: z.lazy(() => WorkingDaysOrderByRelationAggregateInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema).optional(),
  diagnosis: z.lazy(() => DiagnosisOrderByRelationAggregateInputObjectSchema).optional(),
  Prescription: z.lazy(() => PrescriptionOrderByRelationAggregateInputObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterOrderByRelationAggregateInputObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DoctorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorOrderByWithRelationInput>;
export const DoctorOrderByWithRelationInputObjectZodSchema = makeSchema();
