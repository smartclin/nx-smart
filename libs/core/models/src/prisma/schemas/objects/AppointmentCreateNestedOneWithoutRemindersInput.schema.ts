import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutRemindersInputObjectSchema as AppointmentCreateWithoutRemindersInputObjectSchema } from './AppointmentCreateWithoutRemindersInput.schema';
import { AppointmentUncheckedCreateWithoutRemindersInputObjectSchema as AppointmentUncheckedCreateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedCreateWithoutRemindersInput.schema';
import { AppointmentCreateOrConnectWithoutRemindersInputObjectSchema as AppointmentCreateOrConnectWithoutRemindersInputObjectSchema } from './AppointmentCreateOrConnectWithoutRemindersInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutRemindersInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AppointmentCreateNestedOneWithoutRemindersInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutRemindersInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedOneWithoutRemindersInput>;
export const AppointmentCreateNestedOneWithoutRemindersInputObjectZodSchema = makeSchema();
