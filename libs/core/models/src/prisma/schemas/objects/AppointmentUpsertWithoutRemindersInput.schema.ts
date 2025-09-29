import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentUpdateWithoutRemindersInputObjectSchema as AppointmentUpdateWithoutRemindersInputObjectSchema } from './AppointmentUpdateWithoutRemindersInput.schema';
import { AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema as AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedUpdateWithoutRemindersInput.schema';
import { AppointmentCreateWithoutRemindersInputObjectSchema as AppointmentCreateWithoutRemindersInputObjectSchema } from './AppointmentCreateWithoutRemindersInput.schema';
import { AppointmentUncheckedCreateWithoutRemindersInputObjectSchema as AppointmentUncheckedCreateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedCreateWithoutRemindersInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AppointmentUpdateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputObjectSchema)]),
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentUpsertWithoutRemindersInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithoutRemindersInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithoutRemindersInput>;
export const AppointmentUpsertWithoutRemindersInputObjectZodSchema = makeSchema();
