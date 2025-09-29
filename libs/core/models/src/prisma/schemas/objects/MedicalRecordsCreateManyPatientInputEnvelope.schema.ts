import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientMedicalRecordsCreateManyPatientInputObjectSchema as MedicalRecordsCreateManyPatientInputObjectSchema } from './MedicalRecordsCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MedicalRecordsCreateManyPatientInputObjectSchema), z.lazy(() => MedicalRecordsCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MedicalRecordsCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyPatientInputEnvelope>;
export const MedicalRecordsCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
