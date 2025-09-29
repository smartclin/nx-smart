import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutServiceInputObjectSchema as AppointmentUpdateWithoutServiceInputObjectSchema } from './AppointmentUpdateWithoutServiceInput.schema';
import { AppointmentUncheckedUpdateWithoutServiceInputObjectSchema as AppointmentUncheckedUpdateWithoutServiceInputObjectSchema } from './AppointmentUncheckedUpdateWithoutServiceInput.schema';
import { AppointmentCreateWithoutServiceInputObjectSchema as AppointmentCreateWithoutServiceInputObjectSchema } from './AppointmentCreateWithoutServiceInput.schema';
import { AppointmentUncheckedCreateWithoutServiceInputObjectSchema as AppointmentUncheckedCreateWithoutServiceInputObjectSchema } from './AppointmentUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AppointmentUpdateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput>;
export const AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
