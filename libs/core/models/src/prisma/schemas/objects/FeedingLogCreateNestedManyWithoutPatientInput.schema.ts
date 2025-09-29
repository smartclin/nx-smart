import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogCreateWithoutPatientInputObjectSchema as FeedingLogCreateWithoutPatientInputObjectSchema } from './FeedingLogCreateWithoutPatientInput.schema';
import { FeedingLogUncheckedCreateWithoutPatientInputObjectSchema as FeedingLogUncheckedCreateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedCreateWithoutPatientInput.schema';
import { FeedingLogCreateOrConnectWithoutPatientInputObjectSchema as FeedingLogCreateOrConnectWithoutPatientInputObjectSchema } from './FeedingLogCreateOrConnectWithoutPatientInput.schema';
import { PatientFeedingLogCreateManyPatientInputEnvelopeObjectSchema as FeedingLogCreateManyPatientInputEnvelopeObjectSchema } from './FeedingLogCreateManyPatientInputEnvelope.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './FeedingLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FeedingLogCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FeedingLogCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FeedingLogWhereUniqueInputObjectSchema), z.lazy(() => FeedingLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FeedingLogCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.FeedingLogCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogCreateNestedManyWithoutPatientInput>;
export const FeedingLogCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
