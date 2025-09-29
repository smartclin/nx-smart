import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorEncounterCreateManyDoctorInputObjectSchema as EncounterCreateManyDoctorInputObjectSchema } from './EncounterCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EncounterCreateManyDoctorInputObjectSchema), z.lazy(() => EncounterCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EncounterCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.EncounterCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateManyDoctorInputEnvelope>;
export const EncounterCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
