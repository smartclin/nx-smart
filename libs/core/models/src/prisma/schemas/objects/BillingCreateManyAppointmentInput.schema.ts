import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  amount: z.number(),
  status: BillingStatusSchema.optional(),
  insurance: z.string().optional().nullable(),
  insuranceId: z.string().optional().nullable(),
  serviceDate: z.coerce.date(),
  dueDate: z.coerce.date(),
  paidDate: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BillingCreateManyAppointmentInputObjectSchema: z.ZodType<Prisma.BillingCreateManyAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateManyAppointmentInput>;
export const BillingCreateManyAppointmentInputObjectZodSchema = makeSchema();
