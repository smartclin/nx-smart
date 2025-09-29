import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutFeedingLogsInputObjectSchema as PatientUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUpdateWithoutFeedingLogsInput.schema';
import { PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema as PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema } from './PatientUncheckedUpdateWithoutFeedingLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutFeedingLogsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutFeedingLogsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutFeedingLogsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutFeedingLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutFeedingLogsInput>;
export const PatientUpdateToOneWithWhereWithoutFeedingLogsInputObjectZodSchema = makeSchema();
