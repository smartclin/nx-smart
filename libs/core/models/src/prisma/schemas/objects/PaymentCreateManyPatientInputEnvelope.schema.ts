import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientPaymentCreateManyPatientInputObjectSchema as PaymentCreateManyPatientInputObjectSchema } from './PaymentCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PaymentCreateManyPatientInputObjectSchema), z.lazy(() => PaymentCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PaymentCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.PaymentCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyPatientInputEnvelope>;
export const PaymentCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
