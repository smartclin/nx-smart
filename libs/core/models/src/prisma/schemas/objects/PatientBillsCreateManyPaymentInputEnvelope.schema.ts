import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentPatientBillsCreateManyPaymentInputObjectSchema as PatientBillsCreateManyPaymentInputObjectSchema } from './PatientBillsCreateManyPaymentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PatientBillsCreateManyPaymentInputObjectSchema), z.lazy(() => PatientBillsCreateManyPaymentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PatientBillsCreateManyPaymentInputEnvelopeObjectSchema: z.ZodType<Prisma.PatientBillsCreateManyPaymentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateManyPaymentInputEnvelope>;
export const PatientBillsCreateManyPaymentInputEnvelopeObjectZodSchema = makeSchema();
