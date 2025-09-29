import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutPatientInputObjectSchema as AppointmentUpdateWithoutPatientInputObjectSchema } from './AppointmentUpdateWithoutPatientInput.schema';
import { AppointmentUncheckedUpdateWithoutPatientInputObjectSchema as AppointmentUncheckedUpdateWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateWithoutPatientInput.schema';
import { AppointmentCreateWithoutPatientInputObjectSchema as AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema';
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema as AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AppointmentUpdateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput>;
export const AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
