import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutDoctorInputObjectSchema as AppointmentUpdateWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithoutDoctorInput.schema';
import { AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema as AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput>;
export const AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
