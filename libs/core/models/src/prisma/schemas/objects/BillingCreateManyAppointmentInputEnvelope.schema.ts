import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentBillingCreateManyAppointmentInputObjectSchema as BillingCreateManyAppointmentInputObjectSchema } from './BillingCreateManyAppointmentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BillingCreateManyAppointmentInputObjectSchema), z.lazy(() => BillingCreateManyAppointmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BillingCreateManyAppointmentInputEnvelopeObjectSchema: z.ZodType<Prisma.BillingCreateManyAppointmentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateManyAppointmentInputEnvelope>;
export const BillingCreateManyAppointmentInputEnvelopeObjectZodSchema = makeSchema();
