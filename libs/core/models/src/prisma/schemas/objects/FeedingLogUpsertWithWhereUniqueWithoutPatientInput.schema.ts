import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './FeedingLogWhereUniqueInput.schema';
import { FeedingLogUpdateWithoutPatientInputObjectSchema as FeedingLogUpdateWithoutPatientInputObjectSchema } from './FeedingLogUpdateWithoutPatientInput.schema';
import { FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema as FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedUpdateWithoutPatientInput.schema';
import { FeedingLogCreateWithoutPatientInputObjectSchema as FeedingLogCreateWithoutPatientInputObjectSchema } from './FeedingLogCreateWithoutPatientInput.schema';
import { FeedingLogUncheckedCreateWithoutPatientInputObjectSchema as FeedingLogUncheckedCreateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedingLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FeedingLogUpdateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.FeedingLogUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogUpsertWithWhereUniqueWithoutPatientInput>;
export const FeedingLogUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
