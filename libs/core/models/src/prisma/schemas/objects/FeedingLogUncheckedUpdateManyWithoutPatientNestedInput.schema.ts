import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogCreateWithoutPatientInputObjectSchema as FeedingLogCreateWithoutPatientInputObjectSchema } from './FeedingLogCreateWithoutPatientInput.schema';
import { FeedingLogUncheckedCreateWithoutPatientInputObjectSchema as FeedingLogUncheckedCreateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedCreateWithoutPatientInput.schema';
import { FeedingLogCreateOrConnectWithoutPatientInputObjectSchema as FeedingLogCreateOrConnectWithoutPatientInputObjectSchema } from './FeedingLogCreateOrConnectWithoutPatientInput.schema';
import { FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectSchema as FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './FeedingLogUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientFeedingLogCreateManyPatientInputEnvelopeObjectSchema as FeedingLogCreateManyPatientInputEnvelopeObjectSchema } from './FeedingLogCreateManyPatientInputEnvelope.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './FeedingLogWhereUniqueInput.schema';
import { FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectSchema as FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './FeedingLogUpdateWithWhereUniqueWithoutPatientInput.schema';
import { FeedingLogUpdateManyWithWhereWithoutPatientInputObjectSchema as FeedingLogUpdateManyWithWhereWithoutPatientInputObjectSchema } from './FeedingLogUpdateManyWithWhereWithoutPatientInput.schema';
import { FeedingLogScalarWhereInputObjectSchema as FeedingLogScalarWhereInputObjectSchema } from './FeedingLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FeedingLogCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FeedingLogCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FeedingLogWhereUniqueInputObjectSchema), z.lazy(() => FeedingLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FeedingLogWhereUniqueInputObjectSchema), z.lazy(() => FeedingLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FeedingLogWhereUniqueInputObjectSchema), z.lazy(() => FeedingLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FeedingLogWhereUniqueInputObjectSchema), z.lazy(() => FeedingLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FeedingLogUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FeedingLogScalarWhereInputObjectSchema), z.lazy(() => FeedingLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FeedingLogUncheckedUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.FeedingLogUncheckedUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogUncheckedUpdateManyWithoutPatientNestedInput>;
export const FeedingLogUncheckedUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
