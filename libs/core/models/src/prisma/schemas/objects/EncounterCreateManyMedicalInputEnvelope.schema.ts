import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalEncounterCreateManyMedicalInputObjectSchema as EncounterCreateManyMedicalInputObjectSchema } from './EncounterCreateManyMedicalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EncounterCreateManyMedicalInputObjectSchema), z.lazy(() => EncounterCreateManyMedicalInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EncounterCreateManyMedicalInputEnvelopeObjectSchema: z.ZodType<Prisma.EncounterCreateManyMedicalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateManyMedicalInputEnvelope>;
export const EncounterCreateManyMedicalInputEnvelopeObjectZodSchema = makeSchema();
