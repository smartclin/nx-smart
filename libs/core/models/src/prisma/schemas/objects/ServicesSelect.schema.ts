import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestFindManySchema as LabTestFindManySchema } from '../findManyLabTest.schema';
import { PatientBillsFindManySchema as PatientBillsFindManySchema } from '../findManyPatientBills.schema';
import { AppointmentFindManySchema as AppointmentFindManySchema } from '../findManyAppointment.schema';
import { ServicesCountOutputTypeArgsObjectSchema as ServicesCountOutputTypeArgsObjectSchema } from './ServicesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  serviceName: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  labtests: z.union([z.boolean(), z.lazy(() => LabTestFindManySchema)]).optional(),
  bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManySchema)]).optional(),
  category: z.boolean().optional(),
  duration: z.boolean().optional(),
  isAvailable: z.boolean().optional(),
  appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServicesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServicesSelectObjectSchema: z.ZodType<Prisma.ServicesSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServicesSelect>;
export const ServicesSelectObjectZodSchema = makeSchema();
