import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { EnumJOBTYPEFilterObjectSchema as EnumJOBTYPEFilterObjectSchema } from './EnumJOBTYPEFilter.schema';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WorkingDaysListRelationFilterObjectSchema as WorkingDaysListRelationFilterObjectSchema } from './WorkingDaysListRelationFilter.schema';
import { AppointmentListRelationFilterObjectSchema as AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema';
import { DiagnosisListRelationFilterObjectSchema as DiagnosisListRelationFilterObjectSchema } from './DiagnosisListRelationFilter.schema';
import { PrescriptionListRelationFilterObjectSchema as PrescriptionListRelationFilterObjectSchema } from './PrescriptionListRelationFilter.schema';
import { EncounterListRelationFilterObjectSchema as EncounterListRelationFilterObjectSchema } from './EncounterListRelationFilter.schema';
import { MedicalRecordsListRelationFilterObjectSchema as MedicalRecordsListRelationFilterObjectSchema } from './MedicalRecordsListRelationFilter.schema'

const doctorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DoctorWhereInputObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DoctorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DoctorWhereInputObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  specialization: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  licenseNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  department: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  img: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  colorCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  availabilityStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumJOBTYPEFilterObjectSchema), JOBTYPESchema]).optional(),
  role: z.union([z.lazy(() => EnumRoleNullableFilterObjectSchema), RoleSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  workingDays: z.lazy(() => WorkingDaysListRelationFilterObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterObjectSchema).optional(),
  diagnosis: z.lazy(() => DiagnosisListRelationFilterObjectSchema).optional(),
  Prescription: z.lazy(() => PrescriptionListRelationFilterObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterListRelationFilterObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsListRelationFilterObjectSchema).optional()
}).strict();
export const DoctorWhereInputObjectSchema: z.ZodType<Prisma.DoctorWhereInput> = doctorwhereinputSchema as unknown as z.ZodType<Prisma.DoctorWhereInput>;
export const DoctorWhereInputObjectZodSchema = doctorwhereinputSchema;
