import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterVitalSignsCreateManyEncounterInputObjectSchema as VitalSignsCreateManyEncounterInputObjectSchema } from './VitalSignsCreateManyEncounterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VitalSignsCreateManyEncounterInputObjectSchema), z.lazy(() => VitalSignsCreateManyEncounterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VitalSignsCreateManyEncounterInputEnvelopeObjectSchema: z.ZodType<Prisma.VitalSignsCreateManyEncounterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateManyEncounterInputEnvelope>;
export const VitalSignsCreateManyEncounterInputEnvelopeObjectZodSchema = makeSchema();
