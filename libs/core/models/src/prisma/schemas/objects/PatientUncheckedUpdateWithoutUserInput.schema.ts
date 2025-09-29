import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema as EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { NullableEnumRoleFieldUpdateOperationsInputObjectSchema as NullableEnumRoleFieldUpdateOperationsInputObjectSchema } from './NullableEnumRoleFieldUpdateOperationsInput.schema';
import { AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { PaymentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { EncounterUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as EncounterUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { ImmunizationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as ImmunizationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './ImmunizationUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { GrowthChartUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as GrowthChartUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './GrowthChartUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { FeedingLogUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as FeedingLogUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './FeedingLogUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { BillingUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as BillingUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './BillingUncheckedUpdateManyWithoutPatientNestedInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutPatientNestedInput.schema'

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
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  medical: z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  encounters: z.lazy(() => EncounterUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  immunizations: z.lazy(() => ImmunizationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  growthCharts: z.lazy(() => GrowthChartUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  feedingLogs: z.lazy(() => FeedingLogUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  billing: z.lazy(() => BillingUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional(),
  prescriptions: z.lazy(() => PrescriptionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema).optional()
}).strict();
export const PatientUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUncheckedUpdateWithoutUserInput>;
export const PatientUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
