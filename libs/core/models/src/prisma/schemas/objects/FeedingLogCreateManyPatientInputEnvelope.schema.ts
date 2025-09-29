import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientFeedingLogCreateManyPatientInputObjectSchema as FeedingLogCreateManyPatientInputObjectSchema } from './FeedingLogCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FeedingLogCreateManyPatientInputObjectSchema), z.lazy(() => FeedingLogCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FeedingLogCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.FeedingLogCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogCreateManyPatientInputEnvelope>;
export const FeedingLogCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
