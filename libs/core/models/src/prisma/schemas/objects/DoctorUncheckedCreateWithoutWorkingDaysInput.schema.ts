import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { RoleSchema } from '../enums/Role.schema';
import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { EncounterUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as EncounterUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './EncounterUncheckedCreateNestedManyWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string(),
  userId: z.string(),
  specialization: z.string(),
  licenseNumber: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  department: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  colorCode: z.string().optional().nullable(),
  availabilityStatus: z.string().optional().nullable(),
  isActive: z.boolean().optional().nullable(),
  type: JOBTYPESchema.optional(),
  role: RoleSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  diagnosis: z.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Prescription: z.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectSchema).optional()
}).strict();
export const DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedCreateWithoutWorkingDaysInput>;
export const DoctorUncheckedCreateWithoutWorkingDaysInputObjectZodSchema = makeSchema();
