import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorPrescriptionCreateManyDoctorInputObjectSchema as PrescriptionCreateManyDoctorInputObjectSchema } from './PrescriptionCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PrescriptionCreateManyDoctorInputObjectSchema), z.lazy(() => PrescriptionCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PrescriptionCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.PrescriptionCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateManyDoctorInputEnvelope>;
export const PrescriptionCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
