import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalVitalSignsCreateManyMedicalInputObjectSchema as VitalSignsCreateManyMedicalInputObjectSchema } from './VitalSignsCreateManyMedicalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VitalSignsCreateManyMedicalInputObjectSchema), z.lazy(() => VitalSignsCreateManyMedicalInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VitalSignsCreateManyMedicalInputEnvelopeObjectSchema: z.ZodType<Prisma.VitalSignsCreateManyMedicalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateManyMedicalInputEnvelope>;
export const VitalSignsCreateManyMedicalInputEnvelopeObjectZodSchema = makeSchema();
