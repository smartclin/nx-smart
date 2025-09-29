import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumGenderFilterObjectSchema as EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AppointmentListRelationFilterObjectSchema as AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema';
import { MedicalRecordsListRelationFilterObjectSchema as MedicalRecordsListRelationFilterObjectSchema } from './MedicalRecordsListRelationFilter.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { EncounterListRelationFilterObjectSchema as EncounterListRelationFilterObjectSchema } from './EncounterListRelationFilter.schema';
import { ImmunizationListRelationFilterObjectSchema as ImmunizationListRelationFilterObjectSchema } from './ImmunizationListRelationFilter.schema';
import { GrowthChartListRelationFilterObjectSchema as GrowthChartListRelationFilterObjectSchema } from './GrowthChartListRelationFilter.schema';
import { FeedingLogListRelationFilterObjectSchema as FeedingLogListRelationFilterObjectSchema } from './FeedingLogListRelationFilter.schema';
import { BillingListRelationFilterObjectSchema as BillingListRelationFilterObjectSchema } from './BillingListRelationFilter.schema';
import { PrescriptionListRelationFilterObjectSchema as PrescriptionListRelationFilterObjectSchema } from './PrescriptionListRelationFilter.schema'

const patientwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PatientWhereInputObjectSchema), z.lazy(() => PatientWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PatientWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PatientWhereInputObjectSchema), z.lazy(() => PatientWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dateOfBirth: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  gender: z.union([z.lazy(() => EnumGenderFilterObjectSchema), GenderSchema]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nutritionalStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emergencyContactName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emergencyContactNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  relation: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bloodGroup: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  allergies: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  medicalConditions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  medicalHistory: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  img: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  colorCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleNullableFilterObjectSchema), RoleSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsListRelationFilterObjectSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  encounters: z.lazy(() => EncounterListRelationFilterObjectSchema).optional(),
  immunizations: z.lazy(() => ImmunizationListRelationFilterObjectSchema).optional(),
  growthCharts: z.lazy(() => GrowthChartListRelationFilterObjectSchema).optional(),
  feedingLogs: z.lazy(() => FeedingLogListRelationFilterObjectSchema).optional(),
  billing: z.lazy(() => BillingListRelationFilterObjectSchema).optional(),
  prescriptions: z.lazy(() => PrescriptionListRelationFilterObjectSchema).optional()
}).strict();
export const PatientWhereInputObjectSchema: z.ZodType<Prisma.PatientWhereInput> = patientwhereinputSchema as unknown as z.ZodType<Prisma.PatientWhereInput>;
export const PatientWhereInputObjectZodSchema = patientwhereinputSchema;
