import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutPatientInputObjectSchema as AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema';
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema as AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput>;
export const AppointmentCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
