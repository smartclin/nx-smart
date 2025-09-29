import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserDoctorCreateManyUserInputObjectSchema as DoctorCreateManyUserInputObjectSchema } from './DoctorCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DoctorCreateManyUserInputObjectSchema), z.lazy(() => DoctorCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DoctorCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.DoctorCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateManyUserInputEnvelope>;
export const DoctorCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
