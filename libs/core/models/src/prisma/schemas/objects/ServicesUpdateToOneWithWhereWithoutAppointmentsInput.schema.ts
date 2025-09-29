import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { ServicesUpdateWithoutAppointmentsInputObjectSchema as ServicesUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUpdateWithoutAppointmentsInput.schema';
import { ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema as ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServicesUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const ServicesUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutAppointmentsInput>;
export const ServicesUpdateToOneWithWhereWithoutAppointmentsInputObjectZodSchema = makeSchema();
