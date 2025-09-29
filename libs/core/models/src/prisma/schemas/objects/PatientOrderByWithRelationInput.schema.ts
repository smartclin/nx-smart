import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AppointmentOrderByRelationAggregateInputObjectSchema as AppointmentOrderByRelationAggregateInputObjectSchema } from './AppointmentOrderByRelationAggregateInput.schema';
import { MedicalRecordsOrderByRelationAggregateInputObjectSchema as MedicalRecordsOrderByRelationAggregateInputObjectSchema } from './MedicalRecordsOrderByRelationAggregateInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { EncounterOrderByRelationAggregateInputObjectSchema as EncounterOrderByRelationAggregateInputObjectSchema } from './EncounterOrderByRelationAggregateInput.schema';
import { ImmunizationOrderByRelationAggregateInputObjectSchema as ImmunizationOrderByRelationAggregateInputObjectSchema } from './ImmunizationOrderByRelationAggregateInput.schema';
import { GrowthChartOrderByRelationAggregateInputObjectSchema as GrowthChartOrderByRelationAggregateInputObjectSchema } from './GrowthChartOrderByRelationAggregateInput.schema';
import { FeedingLogOrderByRelationAggregateInputObjectSchema as FeedingLogOrderByRelationAggregateInputObjectSchema } from './FeedingLogOrderByRelationAggregateInput.schema';
import { BillingOrderByRelationAggregateInputObjectSchema as BillingOrderByRelationAggregateInputObjectSchema } from './BillingOrderByRelationAggregateInput.schema';
import { PrescriptionOrderByRelationAggregateInputObjectSchema as PrescriptionOrderByRelationAggregateInputObjectSchema } from './PrescriptionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  nutritionalStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  relation: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bloodGroup: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  allergies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalConditions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  medicalHistory: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  img: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  colorCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsOrderByRelationAggregateInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterOrderByRelationAggregateInputObjectSchema).optional(),
  immunizations: z.lazy(() => ImmunizationOrderByRelationAggregateInputObjectSchema).optional(),
  growthCharts: z.lazy(() => GrowthChartOrderByRelationAggregateInputObjectSchema).optional(),
  feedingLogs: z.lazy(() => FeedingLogOrderByRelationAggregateInputObjectSchema).optional(),
  billing: z.lazy(() => BillingOrderByRelationAggregateInputObjectSchema).optional(),
  prescriptions: z.lazy(() => PrescriptionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PatientOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PatientOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientOrderByWithRelationInput>;
export const PatientOrderByWithRelationInputObjectZodSchema = makeSchema();
