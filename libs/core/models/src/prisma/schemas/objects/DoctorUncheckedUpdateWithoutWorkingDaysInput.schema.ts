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
import { AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema as AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema as DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './DiagnosisUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { EncounterUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema as EncounterUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutDoctorNestedInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutDoctorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  diagnosis: z.lazy(() => DiagnosisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  Prescription: z.lazy(() => PrescriptionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema).optional()
}).strict();
export const DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedUpdateWithoutWorkingDaysInput>;
export const DoctorUncheckedUpdateWithoutWorkingDaysInputObjectZodSchema = makeSchema();
