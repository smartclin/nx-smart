import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutFeedingLogsInputObjectSchema as PatientCreateWithoutFeedingLogsInputObjectSchema } from './PatientCreateWithoutFeedingLogsInput.schema';
import { PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema as PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedCreateWithoutFeedingLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutFeedingLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutFeedingLogsInput>;
export const PatientCreateOrConnectWithoutFeedingLogsInputObjectZodSchema = makeSchema();
