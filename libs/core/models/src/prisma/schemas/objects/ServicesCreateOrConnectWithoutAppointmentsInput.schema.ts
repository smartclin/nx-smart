import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesCreateWithoutAppointmentsInputObjectSchema as ServicesCreateWithoutAppointmentsInputObjectSchema } from './ServicesCreateWithoutAppointmentsInput.schema';
import { ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema as ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema } from './ServicesUncheckedCreateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServicesCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const ServicesCreateOrConnectWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateOrConnectWithoutAppointmentsInput>;
export const ServicesCreateOrConnectWithoutAppointmentsInputObjectZodSchema = makeSchema();
