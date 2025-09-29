import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutAppointmentsInputObjectSchema as ServicesCreateWithoutAppointmentsInputObjectSchema } from './ServicesCreateWithoutAppointmentsInput.schema';
import { ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema as ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedCreateWithoutAppointmentsInput.schema';
import { ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema as ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema } from './ServicesCreateOrConnectWithoutAppointmentsInput.schema';
import { ServicesUpsertWithoutAppointmentsInputObjectSchema as ServicesUpsertWithoutAppointmentsInputObjectSchema } from './ServicesUpsertWithoutAppointmentsInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema as ServicesUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema } from './ServicesUpdateToOneWithWhereWithoutAppointmentsInput.schema';
import { ServicesUpdateWithoutAppointmentsInputObjectSchema as ServicesUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUpdateWithoutAppointmentsInput.schema';
import { ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema as ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ServicesUpsertWithoutAppointmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServicesUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutAppointmentsInputObjectSchema)]).optional()
}).strict();
export const ServicesUpdateOneWithoutAppointmentsNestedInputObjectSchema: z.ZodType<Prisma.ServicesUpdateOneWithoutAppointmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateOneWithoutAppointmentsNestedInput>;
export const ServicesUpdateOneWithoutAppointmentsNestedInputObjectZodSchema = makeSchema();
