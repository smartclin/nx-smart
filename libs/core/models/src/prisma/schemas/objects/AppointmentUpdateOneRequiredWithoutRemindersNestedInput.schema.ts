import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutRemindersInputObjectSchema as AppointmentCreateWithoutRemindersInputObjectSchema } from './AppointmentCreateWithoutRemindersInput.schema';
import { AppointmentUncheckedCreateWithoutRemindersInputObjectSchema as AppointmentUncheckedCreateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedCreateWithoutRemindersInput.schema';
import { AppointmentCreateOrConnectWithoutRemindersInputObjectSchema as AppointmentCreateOrConnectWithoutRemindersInputObjectSchema } from './AppointmentCreateOrConnectWithoutRemindersInput.schema';
import { AppointmentUpsertWithoutRemindersInputObjectSchema as AppointmentUpsertWithoutRemindersInputObjectSchema } from './AppointmentUpsertWithoutRemindersInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateToOneWithWhereWithoutRemindersInputObjectSchema as AppointmentUpdateToOneWithWhereWithoutRemindersInputObjectSchema } from './AppointmentUpdateToOneWithWhereWithoutRemindersInput.schema';
import { AppointmentUpdateWithoutRemindersInputObjectSchema as AppointmentUpdateWithoutRemindersInputObjectSchema } from './AppointmentUpdateWithoutRemindersInput.schema';
import { AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema as AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedUpdateWithoutRemindersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutRemindersInputObjectSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutRemindersInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateToOneWithWhereWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUpdateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema)]).optional()
}).strict();
export const AppointmentUpdateOneRequiredWithoutRemindersNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutRemindersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutRemindersNestedInput>;
export const AppointmentUpdateOneRequiredWithoutRemindersNestedInputObjectZodSchema = makeSchema();
