import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithoutDoctorInputObjectSchema as AppointmentUpdateWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithoutDoctorInput.schema';
import { AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema as AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedUpdateWithoutDoctorInput.schema';
import { AppointmentCreateWithoutDoctorInputObjectSchema as AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema';
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema as AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AppointmentUpdateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput>;
export const AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
