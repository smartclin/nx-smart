import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutFeedingLogsInputObjectSchema as PatientCreateWithoutFeedingLogsInputObjectSchema } from './PatientCreateWithoutFeedingLogsInput.schema';
import { PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema as PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedCreateWithoutFeedingLogsInput.schema';
import { PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema as PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema } from './PatientCreateOrConnectWithoutFeedingLogsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutFeedingLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutFeedingLogsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutFeedingLogsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutFeedingLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutFeedingLogsInput>;
export const PatientCreateNestedOneWithoutFeedingLogsInputObjectZodSchema = makeSchema();
