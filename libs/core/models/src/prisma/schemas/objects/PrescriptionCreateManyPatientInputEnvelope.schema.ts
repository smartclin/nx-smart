import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientPrescriptionCreateManyPatientInputObjectSchema as PrescriptionCreateManyPatientInputObjectSchema } from './PrescriptionCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PrescriptionCreateManyPatientInputObjectSchema), z.lazy(() => PrescriptionCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PrescriptionCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.PrescriptionCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateManyPatientInputEnvelope>;
export const PrescriptionCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
