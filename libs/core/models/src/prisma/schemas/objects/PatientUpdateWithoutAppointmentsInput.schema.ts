import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema as EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { NullableEnumRoleFieldUpdateOperationsInputObjectSchema as NullableEnumRoleFieldUpdateOperationsInputObjectSchema } from './NullableEnumRoleFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPatientNestedInputObjectSchema as UserUpdateOneRequiredWithoutPatientNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPatientNestedInput.schema';
import { MedicalRecordsUpdateManyWithoutPatientNestedInputObjectSchema as MedicalRecordsUpdateManyWithoutPatientNestedInputObjectSchema } from './MedicalRecordsUpdateManyWithoutPatientNestedInput.schema';
import { PaymentUpdateManyWithoutPatientNestedInputObjectSchema as PaymentUpdateManyWithoutPatientNestedInputObjectSchema } from './PaymentUpdateManyWithoutPatientNestedInput.schema';
import { EncounterUpdateManyWithoutPatientNestedInputObjectSchema as EncounterUpdateManyWithoutPatientNestedInputObjectSchema } from './EncounterUpdateManyWithoutPatientNestedInput.schema';
import { ImmunizationUpdateManyWithoutPatientNestedInputObjectSchema as ImmunizationUpdateManyWithoutPatientNestedInputObjectSchema } from './ImmunizationUpdateManyWithoutPatientNestedInput.schema';
import { GrowthChartUpdateManyWithoutPatientNestedInputObjectSchema as GrowthChartUpdateManyWithoutPatientNestedInputObjectSchema } from './GrowthChartUpdateManyWithoutPatientNestedInput.schema';
import { FeedingLogUpdateManyWithoutPatientNestedInputObjectSchema as FeedingLogUpdateManyWithoutPatientNestedInputObjectSchema } from './FeedingLogUpdateManyWithoutPatientNestedInput.schema';
import { BillingUpdateManyWithoutPatientNestedInputObjectSchema as BillingUpdateManyWithoutPatientNestedInputObjectSchema } from './BillingUpdateManyWithoutPatientNestedInput.schema';
import { PrescriptionUpdateManyWithoutPatientNestedInputObjectSchema as PrescriptionUpdateManyWithoutPatientNestedInputObjectSchema } from './PrescriptionUpdateManyWithoutPatientNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dateOfBirth: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  gender: z.union([GenderSchema, z.lazy(() => EnumGenderFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nutritionalStatus: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emergencyContactName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emergencyContactNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  relation: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bloodGroup: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  allergies: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  medicalConditions: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  medicalHistory: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  img: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  colorCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([RoleSchema, z.lazy(() => NullableEnumRoleFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPatientNestedInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  immunizations: z.lazy(() => ImmunizationUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  growthCharts: z.lazy(() => GrowthChartUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  feedingLogs: z.lazy(() => FeedingLogUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  billing: z.lazy(() => BillingUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  prescriptions: z.lazy(() => PrescriptionUpdateManyWithoutPatientNestedInputObjectSchema).optional()
}).strict();
export const PatientUpdateWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.PatientUpdateWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateWithoutAppointmentsInput>;
export const PatientUpdateWithoutAppointmentsInputObjectZodSchema = makeSchema();
