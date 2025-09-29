import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutServiceInputObjectSchema as AppointmentUpdateWithoutServiceInputObjectSchema } from './AppointmentUpdateWithoutServiceInput.schema';
import { AppointmentUncheckedUpdateWithoutServiceInputObjectSchema as AppointmentUncheckedUpdateWithoutServiceInputObjectSchema } from './AppointmentUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput>;
export const AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
