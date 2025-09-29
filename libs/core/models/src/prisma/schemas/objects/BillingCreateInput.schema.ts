import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';
import { PatientCreateNestedOneWithoutBillingInputObjectSchema as PatientCreateNestedOneWithoutBillingInputObjectSchema } from './PatientCreateNestedOneWithoutBillingInput.schema';
import { AppointmentCreateNestedOneWithoutBillingInputObjectSchema as AppointmentCreateNestedOneWithoutBillingInputObjectSchema } from './AppointmentCreateNestedOneWithoutBillingInput.schema'

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
  patient: z.lazy(() => PatientCreateNestedOneWithoutBillingInputObjectSchema),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutBillingInputObjectSchema).optional()
}).strict();
export const BillingCreateInputObjectSchema: z.ZodType<Prisma.BillingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateInput>;
export const BillingCreateInputObjectZodSchema = makeSchema();
