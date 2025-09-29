import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { RoleSchema } from '../enums/Role.schema';
import { AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema as AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateNestedManyWithoutPatientInput.schema';
import { MedicalRecordsUncheckedCreateNestedManyWithoutPatientInputObjectSchema as MedicalRecordsUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutPatientInput.schema';
import { PaymentUncheckedCreateNestedManyWithoutPatientInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutPatientInput.schema';
import { EncounterUncheckedCreateNestedManyWithoutPatientInputObjectSchema as EncounterUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './EncounterUncheckedCreateNestedManyWithoutPatientInput.schema';
import { ImmunizationUncheckedCreateNestedManyWithoutPatientInputObjectSchema as ImmunizationUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './ImmunizationUncheckedCreateNestedManyWithoutPatientInput.schema';
import { GrowthChartUncheckedCreateNestedManyWithoutPatientInputObjectSchema as GrowthChartUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './GrowthChartUncheckedCreateNestedManyWithoutPatientInput.schema';
import { FeedingLogUncheckedCreateNestedManyWithoutPatientInputObjectSchema as FeedingLogUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './FeedingLogUncheckedCreateNestedManyWithoutPatientInput.schema';
import { BillingUncheckedCreateNestedManyWithoutPatientInputObjectSchema as BillingUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './BillingUncheckedCreateNestedManyWithoutPatientInput.schema';
import { PrescriptionUncheckedCreateNestedManyWithoutPatientInputObjectSchema as PrescriptionUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './PrescriptionUncheckedCreateNestedManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  userId: z.string(),
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
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  medical: z.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  encounters: z.lazy(() => EncounterUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  immunizations: z.lazy(() => ImmunizationUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  growthCharts: z.lazy(() => GrowthChartUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  feedingLogs: z.lazy(() => FeedingLogUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  billing: z.lazy(() => BillingUncheckedCreateNestedManyWithoutPatientInputObjectSchema),
  prescriptions: z.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutPatientInputObjectSchema)
}).strict();
export const PatientUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PatientUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUncheckedCreateInput>;
export const PatientUncheckedCreateInputObjectZodSchema = makeSchema();
