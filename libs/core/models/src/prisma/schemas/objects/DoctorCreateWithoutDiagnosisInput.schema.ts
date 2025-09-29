import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { RoleSchema } from '../enums/Role.schema';
import { UserCreateNestedOneWithoutDoctorInputObjectSchema as UserCreateNestedOneWithoutDoctorInputObjectSchema } from './UserCreateNestedOneWithoutDoctorInput.schema';
import { WorkingDaysCreateNestedManyWithoutDoctorInputObjectSchema as WorkingDaysCreateNestedManyWithoutDoctorInputObjectSchema } from './WorkingDaysCreateNestedManyWithoutDoctorInput.schema';
import { AppointmentCreateNestedManyWithoutDoctorInputObjectSchema as AppointmentCreateNestedManyWithoutDoctorInputObjectSchema } from './AppointmentCreateNestedManyWithoutDoctorInput.schema';
import { PrescriptionCreateNestedManyWithoutDoctorInputObjectSchema as PrescriptionCreateNestedManyWithoutDoctorInputObjectSchema } from './PrescriptionCreateNestedManyWithoutDoctorInput.schema';
import { EncounterCreateNestedManyWithoutDoctorInputObjectSchema as EncounterCreateNestedManyWithoutDoctorInputObjectSchema } from './EncounterCreateNestedManyWithoutDoctorInput.schema';
import { MedicalRecordsCreateNestedManyWithoutDoctorInputObjectSchema as MedicalRecordsCreateNestedManyWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateNestedManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string(),
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
  user: z.lazy(() => UserCreateNestedOneWithoutDoctorInputObjectSchema),
  workingDays: z.lazy(() => WorkingDaysCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Prescription: z.lazy(() => PrescriptionCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  Encounter: z.lazy(() => EncounterCreateNestedManyWithoutDoctorInputObjectSchema).optional(),
  MedicalRecords: z.lazy(() => MedicalRecordsCreateNestedManyWithoutDoctorInputObjectSchema).optional()
}).strict();
export const DoctorCreateWithoutDiagnosisInputObjectSchema: z.ZodType<Prisma.DoctorCreateWithoutDiagnosisInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateWithoutDiagnosisInput>;
export const DoctorCreateWithoutDiagnosisInputObjectZodSchema = makeSchema();
