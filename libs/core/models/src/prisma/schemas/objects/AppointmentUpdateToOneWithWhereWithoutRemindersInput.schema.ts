import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentUpdateWithoutRemindersInputObjectSchema as AppointmentUpdateWithoutRemindersInputObjectSchema } from './AppointmentUpdateWithoutRemindersInput.schema';
import { AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema as AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema } from './AppointmentUncheckedUpdateWithoutRemindersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutRemindersInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputObjectSchema)])
}).strict();
export const AppointmentUpdateToOneWithWhereWithoutRemindersInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutRemindersInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutRemindersInput>;
export const AppointmentUpdateToOneWithWhereWithoutRemindersInputObjectZodSchema = makeSchema();
