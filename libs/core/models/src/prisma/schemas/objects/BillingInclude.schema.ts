import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { AppointmentArgsObjectSchema as AppointmentArgsObjectSchema } from './AppointmentArgs.schema'

const makeSchema = () => z.object({
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsObjectSchema)]).optional()
}).strict();
export const BillingIncludeObjectSchema: z.ZodType<Prisma.BillingInclude> = makeSchema() as unknown as z.ZodType<Prisma.BillingInclude>;
export const BillingIncludeObjectZodSchema = makeSchema();
