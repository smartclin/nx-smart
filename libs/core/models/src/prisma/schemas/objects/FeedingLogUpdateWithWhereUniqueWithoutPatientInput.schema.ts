import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './FeedingLogWhereUniqueInput.schema';
import { FeedingLogUpdateWithoutPatientInputObjectSchema as FeedingLogUpdateWithoutPatientInputObjectSchema } from './FeedingLogUpdateWithoutPatientInput.schema';
import { FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema as FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema } from './FeedingLogUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedingLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FeedingLogUpdateWithoutPatientInputObjectSchema), z.lazy(() => FeedingLogUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.FeedingLogUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogUpdateWithWhereUniqueWithoutPatientInput>;
export const FeedingLogUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
