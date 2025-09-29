import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { EnumJOBTYPEFieldUpdateOperationsInputObjectSchema as EnumJOBTYPEFieldUpdateOperationsInputObjectSchema } from './EnumJOBTYPEFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { NullableEnumRoleFieldUpdateOperationsInputObjectSchema as NullableEnumRoleFieldUpdateOperationsInputObjectSchema } from './NullableEnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDoctorNestedInputObjectSchema as UserUpdateOneRequiredWithoutDoctorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDoctorNestedInput.schema';
import { WorkingDaysUpdateManyWithoutDoctorNestedInputObjectSchema as WorkingDaysUpdateManyWithoutDoctorNestedInputObjectSchema } from './WorkingDaysUpdateManyWithoutDoctorNestedInput.schema';
import { AppointmentUpdateManyWithoutDoctorNestedInputObjectSchema as AppointmentUpdateManyWithoutDoctorNestedInputObjectSchema } from './AppointmentUpdateManyWithoutDoctorNestedInput.schema';
import { DiagnosisUpdateManyWithoutDoctorNestedInputObjectSchema as DiagnosisUpdateManyWithoutDoctorNestedInputObjectSchema } from './DiagnosisUpdateManyWithoutDoctorNestedInput.schema';
import { EncounterUpdateManyWithoutDoctorNestedInputObjectSchema as EncounterUpdateManyWithoutDoctorNestedInputObjectSchema } from './EncounterUpdateManyWithoutDoctorNestedInput.schema';
import { MedicalRecordsUpdateManyWithoutDoctorNestedInputObjectSchema as MedicalRecordsUpdateManyWithoutDoctorNestedInputObjectSchema } from './MedicalRecordsUpdateManyWithoutDoctorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  specialization: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  licenseNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  img: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  colorCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  availabilityStatus: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([JOBTYPESchema, z.lazy(() => EnumJOBTYPEFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([RoleSchema, z.lazy(() => NullableEnumRoleFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDoctorNestedInputObjectSchema).optional(),
  workingDays: z.lazy(() => WorkingDaysUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  diagnosis: z.lazy(() => DiagnosisUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsUpdateManyWithoutDoctorNestedInputObjectSchema).optional()
}).strict();
export const DoctorUpdateWithoutPrescriptionInputObjectSchema: z.ZodType<Prisma.DoctorUpdateWithoutPrescriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateWithoutPrescriptionInput>;
export const DoctorUpdateWithoutPrescriptionInputObjectZodSchema = makeSchema();
