import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutAppointmentsInputObjectSchema as ServicesCreateWithoutAppointmentsInputObjectSchema } from './ServicesCreateWithoutAppointmentsInput.schema';
import { ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema as ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedCreateWithoutAppointmentsInput.schema';
import { ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema as ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema } from './ServicesCreateOrConnectWithoutAppointmentsInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServicesCreateNestedOneWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateNestedOneWithoutAppointmentsInput>;
export const ServicesCreateNestedOneWithoutAppointmentsInputObjectZodSchema = makeSchema();
