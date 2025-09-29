import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';
import { PatientCreateNestedOneWithoutBillingInputObjectSchema as PatientCreateNestedOneWithoutBillingInputObjectSchema } from './PatientCreateNestedOneWithoutBillingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number(),
  status: BillingStatusSchema.optional(),
  insurance: z.string().optional().nullable(),
  insuranceId: z.string().optional().nullable(),
  serviceDate: z.coerce.date(),
  dueDate: z.coerce.date(),
  paidDate: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutBillingInputObjectSchema)
}).strict();
export const BillingCreateWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingCreateWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateWithoutAppointmentInput>;
export const BillingCreateWithoutAppointmentInputObjectZodSchema = makeSchema();
