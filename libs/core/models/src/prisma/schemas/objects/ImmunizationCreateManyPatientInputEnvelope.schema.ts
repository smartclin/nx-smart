import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientImmunizationCreateManyPatientInputObjectSchema as ImmunizationCreateManyPatientInputObjectSchema } from './ImmunizationCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImmunizationCreateManyPatientInputObjectSchema), z.lazy(() => ImmunizationCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImmunizationCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.ImmunizationCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateManyPatientInputEnvelope>;
export const ImmunizationCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
