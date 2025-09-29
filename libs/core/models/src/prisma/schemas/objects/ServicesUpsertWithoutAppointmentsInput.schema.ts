import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesUpdateWithoutAppointmentsInputObjectSchema as ServicesUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUpdateWithoutAppointmentsInput.schema';
import { ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema as ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInput.schema';
import { ServicesCreateWithoutAppointmentsInputObjectSchema as ServicesCreateWithoutAppointmentsInputObjectSchema } from './ServicesCreateWithoutAppointmentsInput.schema';
import { ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema as ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedCreateWithoutAppointmentsInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServicesUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ServicesCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema)]),
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional()
}).strict();
export const ServicesUpsertWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesUpsertWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpsertWithoutAppointmentsInput>;
export const ServicesUpsertWithoutAppointmentsInputObjectZodSchema = makeSchema();
