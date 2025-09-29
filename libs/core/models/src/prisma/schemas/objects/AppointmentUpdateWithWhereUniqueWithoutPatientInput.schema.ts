import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutPatientInputObjectSchema as AppointmentUpdateWithoutPatientInputObjectSchema } from './AppointmentUpdateWithoutPatientInput.schema';
import { AppointmentUncheckedUpdateWithoutPatientInputObjectSchema as AppointmentUncheckedUpdateWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput>;
export const AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
