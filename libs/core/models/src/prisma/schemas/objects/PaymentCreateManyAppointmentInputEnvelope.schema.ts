import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentPaymentCreateManyAppointmentInputObjectSchema as PaymentCreateManyAppointmentInputObjectSchema } from './PaymentCreateManyAppointmentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PaymentCreateManyAppointmentInputObjectSchema), z.lazy(() => PaymentCreateManyAppointmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PaymentCreateManyAppointmentInputEnvelopeObjectSchema: z.ZodType<Prisma.PaymentCreateManyAppointmentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyAppointmentInputEnvelope>;
export const PaymentCreateManyAppointmentInputEnvelopeObjectZodSchema = makeSchema();
