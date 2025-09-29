import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './FeedingLogWhereUniqueInput.schema';
import { FeedingLogCreateWithoutPatientInputObjectSchema as FeedingLogCreateWithoutPatientInputObjectSchema } from './FeedingLogCreateWithoutPatientInput.schema';
import { FeedingLogUncheckedCreateWithoutPatientInputObjectSchema as FeedingLogUncheckedCreateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedingLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FeedingLogCreateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const FeedingLogCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.FeedingLogCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogCreateOrConnectWithoutPatientInput>;
export const FeedingLogCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
