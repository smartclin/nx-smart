import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestFindManySchema as LabTestFindManySchema } from '../findManyLabTest.schema';
import { PatientBillsFindManySchema as PatientBillsFindManySchema } from '../findManyPatientBills.schema';
import { AppointmentFindManySchema as AppointmentFindManySchema } from '../findManyAppointment.schema';
import { ServicesCountOutputTypeArgsObjectSchema as ServicesCountOutputTypeArgsObjectSchema } from './ServicesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  labtests: z.union([z.boolean(), z.lazy(() => LabTestFindManySchema)]).optional(),
  bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManySchema)]).optional(),
  appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServicesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServicesIncludeObjectSchema: z.ZodType<Prisma.ServicesInclude> = makeSchema() as unknown as z.ZodType<Prisma.ServicesInclude>;
export const ServicesIncludeObjectZodSchema = makeSchema();
