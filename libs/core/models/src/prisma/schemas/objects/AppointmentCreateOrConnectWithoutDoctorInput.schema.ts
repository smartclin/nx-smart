import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutDoctorInputObjectSchema as AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema';
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema as AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutDoctorInput>;
export const AppointmentCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
