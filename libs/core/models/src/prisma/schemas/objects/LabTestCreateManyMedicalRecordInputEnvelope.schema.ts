import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordLabTestCreateManyMedicalRecordInputObjectSchema as LabTestCreateManyMedicalRecordInputObjectSchema } from './LabTestCreateManyMedicalRecordInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LabTestCreateManyMedicalRecordInputObjectSchema), z.lazy(() => LabTestCreateManyMedicalRecordInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LabTestCreateManyMedicalRecordInputEnvelopeObjectSchema: z.ZodType<Prisma.LabTestCreateManyMedicalRecordInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateManyMedicalRecordInputEnvelope>;
export const LabTestCreateManyMedicalRecordInputEnvelopeObjectZodSchema = makeSchema();
