import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorDiagnosisCreateManyDoctorInputObjectSchema as DiagnosisCreateManyDoctorInputObjectSchema } from './DiagnosisCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DiagnosisCreateManyDoctorInputObjectSchema), z.lazy(() => DiagnosisCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DiagnosisCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.DiagnosisCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateManyDoctorInputEnvelope>;
export const DiagnosisCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
