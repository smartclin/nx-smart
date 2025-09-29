import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserCreateNestedOneWithoutPatientInputObjectSchema as UserCreateNestedOneWithoutPatientInputObjectSchema } from './UserCreateNestedOneWithoutPatientInput.schema';
import { AppointmentCreateNestedManyWithoutPatientInputObjectSchema as AppointmentCreateNestedManyWithoutPatientInputObjectSchema } from './AppointmentCreateNestedManyWithoutPatientInput.schema';
import { MedicalRecordsCreateNestedManyWithoutPatientInputObjectSchema as MedicalRecordsCreateNestedManyWithoutPatientInputObjectSchema } from './MedicalRecordsCreateNestedManyWithoutPatientInput.schema';
import { PaymentCreateNestedManyWithoutPatientInputObjectSchema as PaymentCreateNestedManyWithoutPatientInputObjectSchema } from './PaymentCreateNestedManyWithoutPatientInput.schema';
import { EncounterCreateNestedManyWithoutPatientInputObjectSchema as EncounterCreateNestedManyWithoutPatientInputObjectSchema } from './EncounterCreateNestedManyWithoutPatientInput.schema';
import { ImmunizationCreateNestedManyWithoutPatientInputObjectSchema as ImmunizationCreateNestedManyWithoutPatientInputObjectSchema } from './ImmunizationCreateNestedManyWithoutPatientInput.schema';
import { GrowthChartCreateNestedManyWithoutPatientInputObjectSchema as GrowthChartCreateNestedManyWithoutPatientInputObjectSchema } from './GrowthChartCreateNestedManyWithoutPatientInput.schema';
import { FeedingLogCreateNestedManyWithoutPatientInputObjectSchema as FeedingLogCreateNestedManyWithoutPatientInputObjectSchema } from './FeedingLogCreateNestedManyWithoutPatientInput.schema';
import { BillingCreateNestedManyWithoutPatientInputObjectSchema as BillingCreateNestedManyWithoutPatientInputObjectSchema } from './BillingCreateNestedManyWithoutPatientInput.schema';
import { PrescriptionCreateNestedManyWithoutPatientInputObjectSchema as PrescriptionCreateNestedManyWithoutPatientInputObjectSchema } from './PrescriptionCreateNestedManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  gender: GenderSchema.optional(),
  phone: z.string().optional().nullable(),
  email: z.string(),
  nutritionalStatus: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  emergencyContactName: z.string().optional().nullable(),
  emergencyContactNumber: z.string().optional().nullable(),
  relation: z.string().optional().nullable(),
  bloodGroup: z.string().optional().nullable(),
  allergies: z.string().optional().nullable(),
  medicalConditions: z.string().optional().nullable(),
  medicalHistory: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  colorCode: z.string().optional().nullable(),
  role: RoleSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  status: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutPatientInputObjectSchema),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutPatientInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsCreateNestedManyWithoutPatientInputObjectSchema),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutPatientInputObjectSchema),
  encounters: z.lazy(() => EncounterCreateNestedManyWithoutPatientInputObjectSchema),
  immunizations: z.lazy(() => ImmunizationCreateNestedManyWithoutPatientInputObjectSchema),
  growthCharts: z.lazy(() => GrowthChartCreateNestedManyWithoutPatientInputObjectSchema),
  feedingLogs: z.lazy(() => FeedingLogCreateNestedManyWithoutPatientInputObjectSchema),
  billing: z.lazy(() => BillingCreateNestedManyWithoutPatientInputObjectSchema),
  prescriptions: z.lazy(() => PrescriptionCreateNestedManyWithoutPatientInputObjectSchema)
}).strict();
export const PatientCreateInputObjectSchema: z.ZodType<Prisma.PatientCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateInput>;
export const PatientCreateInputObjectZodSchema = makeSchema();
