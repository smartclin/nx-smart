import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutFeedingLogsInputObjectSchema as PatientUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUpdateWithoutFeedingLogsInput.schema';
import { PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema as PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedUpdateWithoutFeedingLogsInput.schema';
import { PatientCreateWithoutFeedingLogsInputObjectSchema as PatientCreateWithoutFeedingLogsInputObjectSchema } from './PatientCreateWithoutFeedingLogsInput.schema';
import { PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema as PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedCreateWithoutFeedingLogsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutFeedingLogsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutFeedingLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutFeedingLogsInput>;
export const PatientUpsertWithoutFeedingLogsInputObjectZodSchema = makeSchema();
