import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordPrescriptionCreateManyMedicalRecordInputObjectSchema as PrescriptionCreateManyMedicalRecordInputObjectSchema } from './PrescriptionCreateManyMedicalRecordInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PrescriptionCreateManyMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionCreateManyMedicalRecordInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema: z.ZodType<Prisma.PrescriptionCreateManyMedicalRecordInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateManyMedicalRecordInputEnvelope>;
export const PrescriptionCreateManyMedicalRecordInputEnvelopeObjectZodSchema = makeSchema();
