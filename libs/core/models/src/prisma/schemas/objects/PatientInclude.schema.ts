import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AppointmentFindManySchema as AppointmentFindManySchema } from '../findManyAppointment.schema';
import { MedicalRecordsFindManySchema as MedicalRecordsFindManySchema } from '../findManyMedicalRecords.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { EncounterFindManySchema as EncounterFindManySchema } from '../findManyEncounter.schema';
import { ImmunizationFindManySchema as ImmunizationFindManySchema } from '../findManyImmunization.schema';
import { GrowthChartFindManySchema as GrowthChartFindManySchema } from '../findManyGrowthChart.schema';
import { FeedingLogFindManySchema as FeedingLogFindManySchema } from '../findManyFeedingLog.schema';
import { BillingFindManySchema as BillingFindManySchema } from '../findManyBilling.schema';
import { PrescriptionFindManySchema as PrescriptionFindManySchema } from '../findManyPrescription.schema';
import { PatientCountOutputTypeArgsObjectSchema as PatientCountOutputTypeArgsObjectSchema } from './PatientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManySchema)]).optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  encounters: z.union([z.boolean(), z.lazy(() => EncounterFindManySchema)]).optional(),
  immunizations: z.union([z.boolean(), z.lazy(() => ImmunizationFindManySchema)]).optional(),
  growthCharts: z.union([z.boolean(), z.lazy(() => GrowthChartFindManySchema)]).optional(),
  feedingLogs: z.union([z.boolean(), z.lazy(() => FeedingLogFindManySchema)]).optional(),
  billing: z.union([z.boolean(), z.lazy(() => BillingFindManySchema)]).optional(),
  prescriptions: z.union([z.boolean(), z.lazy(() => PrescriptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PatientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PatientIncludeObjectSchema: z.ZodType<Prisma.PatientInclude> = makeSchema() as unknown as z.ZodType<Prisma.PatientInclude>;
export const PatientIncludeObjectZodSchema = makeSchema();
