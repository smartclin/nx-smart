import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutServiceInputObjectSchema as AppointmentCreateWithoutServiceInputObjectSchema } from './AppointmentCreateWithoutServiceInput.schema';
import { AppointmentUncheckedCreateWithoutServiceInputObjectSchema as AppointmentUncheckedCreateWithoutServiceInputObjectSchema } from './AppointmentUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutServiceInput>;
export const AppointmentCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
