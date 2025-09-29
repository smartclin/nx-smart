import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillingCreateManyPatientInputObjectSchema as BillingCreateManyPatientInputObjectSchema } from './BillingCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BillingCreateManyPatientInputObjectSchema), z.lazy(() => BillingCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BillingCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.BillingCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateManyPatientInputEnvelope>;
export const BillingCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
