import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserPatientCreateManyUserInputObjectSchema as PatientCreateManyUserInputObjectSchema } from './PatientCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PatientCreateManyUserInputObjectSchema), z.lazy(() => PatientCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PatientCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PatientCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateManyUserInputEnvelope>;
export const PatientCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
