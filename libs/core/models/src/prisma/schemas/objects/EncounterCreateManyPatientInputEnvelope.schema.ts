import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientEncounterCreateManyPatientInputObjectSchema as EncounterCreateManyPatientInputObjectSchema } from './EncounterCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EncounterCreateManyPatientInputObjectSchema), z.lazy(() => EncounterCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EncounterCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.EncounterCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateManyPatientInputEnvelope>;
export const EncounterCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
