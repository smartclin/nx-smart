import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { RoleSchema } from '../enums/Role.schema';
import { WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputObjectSchema as WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedCreateNestedManyWithoutDoctorInput.schema';
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
  workingDays: z.lazy(() => WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputObjectSchema),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema),
  diagnosis: z.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema),
  Prescription: z.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema),
  Encounter: z.lazy(() => EncounterUncheckedCreateNestedManyWithoutDoctorInputObjectSchema),
  MedicalRecords: z.lazy(() => MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectSchema)
}).strict();
export const DoctorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedCreateInput>;
export const DoctorUncheckedCreateInputObjectZodSchema = makeSchema();
