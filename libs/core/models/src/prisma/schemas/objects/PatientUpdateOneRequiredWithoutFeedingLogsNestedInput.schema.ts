import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutFeedingLogsInputObjectSchema as PatientCreateWithoutFeedingLogsInputObjectSchema } from './PatientCreateWithoutFeedingLogsInput.schema';
import { PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema as PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedCreateWithoutFeedingLogsInput.schema';
import { PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema as PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema } from './PatientCreateOrConnectWithoutFeedingLogsInput.schema';
import { PatientUpsertWithoutFeedingLogsInputObjectSchema as PatientUpsertWithoutFeedingLogsInputObjectSchema } from './PatientUpsertWithoutFeedingLogsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutFeedingLogsInputObjectSchema as PatientUpdateToOneWithWhereWithoutFeedingLogsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutFeedingLogsInput.schema';
import { PatientUpdateWithoutFeedingLogsInputObjectSchema as PatientUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUpdateWithoutFeedingLogsInput.schema';
import { PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema as PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedUpdateWithoutFeedingLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutFeedingLogsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUpdateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutFeedingLogsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutFeedingLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutFeedingLogsNestedInput>;
export const PatientUpdateOneRequiredWithoutFeedingLogsNestedInputObjectZodSchema = makeSchema();
