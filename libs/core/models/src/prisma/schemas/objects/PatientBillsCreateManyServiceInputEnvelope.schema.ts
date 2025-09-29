import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicePatientBillsCreateManyServiceInputObjectSchema as PatientBillsCreateManyServiceInputObjectSchema } from './PatientBillsCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PatientBillsCreateManyServiceInputObjectSchema), z.lazy(() => PatientBillsCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PatientBillsCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.PatientBillsCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateManyServiceInputEnvelope>;
export const PatientBillsCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
