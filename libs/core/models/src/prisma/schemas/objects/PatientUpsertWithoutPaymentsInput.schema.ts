import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutPaymentsInputObjectSchema as PatientUpdateWithoutPaymentsInputObjectSchema } from './PatientUpdateWithoutPaymentsInput.schema';
import { PatientUncheckedUpdateWithoutPaymentsInputObjectSchema as PatientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PatientUncheckedUpdateWithoutPaymentsInput.schema';
import { PatientCreateWithoutPaymentsInputObjectSchema as PatientCreateWithoutPaymentsInputObjectSchema } from './PatientCreateWithoutPaymentsInput.schema';
import { PatientUncheckedCreateWithoutPaymentsInputObjectSchema as PatientUncheckedCreateWithoutPaymentsInputObjectSchema } from './PatientUncheckedCreateWithoutPaymentsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutPaymentsInput>;
export const PatientUpsertWithoutPaymentsInputObjectZodSchema = makeSchema();
