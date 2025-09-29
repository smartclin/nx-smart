import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutRemindersInputObjectSchema as AppointmentCreateWithoutRemindersInputObjectSchema } from './AppointmentCreateWithoutRemindersInput.schema';
import { AppointmentUncheckedCreateWithoutRemindersInputObjectSchema as AppointmentUncheckedCreateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedCreateWithoutRemindersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutRemindersInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutRemindersInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutRemindersInput>;
export const AppointmentCreateOrConnectWithoutRemindersInputObjectZodSchema = makeSchema();
