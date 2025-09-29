import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WorkingDaysFindManySchema as WorkingDaysFindManySchema } from '../findManyWorkingDays.schema';
import { AppointmentFindManySchema as AppointmentFindManySchema } from '../findManyAppointment.schema';
import { DiagnosisFindManySchema as DiagnosisFindManySchema } from '../findManyDiagnosis.schema';
import { PrescriptionFindManySchema as PrescriptionFindManySchema } from '../findManyPrescription.schema';
import { EncounterFindManySchema as EncounterFindManySchema } from '../findManyEncounter.schema';
import { MedicalRecordsFindManySchema as MedicalRecordsFindManySchema } from '../findManyMedicalRecords.schema';
import { DoctorCountOutputTypeArgsObjectSchema as DoctorCountOutputTypeArgsObjectSchema } from './DoctorCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  workingDays: z.union([z.boolean(), z.lazy(() => WorkingDaysFindManySchema)]).optional(),
  appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManySchema)]).optional(),
  diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManySchema)]).optional(),
  Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManySchema)]).optional(),
  Encounter: z.union([z.boolean(), z.lazy(() => EncounterFindManySchema)]).optional(),
  MedicalRecords: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DoctorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DoctorIncludeObjectSchema: z.ZodType<Prisma.DoctorInclude> = makeSchema() as unknown as z.ZodType<Prisma.DoctorInclude>;
export const DoctorIncludeObjectZodSchema = makeSchema();
