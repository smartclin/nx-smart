import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalDiagnosisCreateManyMedicalInputObjectSchema as DiagnosisCreateManyMedicalInputObjectSchema } from './DiagnosisCreateManyMedicalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DiagnosisCreateManyMedicalInputObjectSchema), z.lazy(() => DiagnosisCreateManyMedicalInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DiagnosisCreateManyMedicalInputEnvelopeObjectSchema: z.ZodType<Prisma.DiagnosisCreateManyMedicalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateManyMedicalInputEnvelope>;
export const DiagnosisCreateManyMedicalInputEnvelopeObjectZodSchema = makeSchema();
