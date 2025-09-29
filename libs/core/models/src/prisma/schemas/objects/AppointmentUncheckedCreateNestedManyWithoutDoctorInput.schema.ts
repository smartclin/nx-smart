import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutDoctorInputObjectSchema as AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema';
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema as AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema';
import { AppointmentCreateOrConnectWithoutDoctorInputObjectSchema as AppointmentCreateOrConnectWithoutDoctorInputObjectSchema } from './AppointmentCreateOrConnectWithoutDoctorInput.schema';
import { DoctorAppointmentCreateManyDoctorInputEnvelopeObjectSchema as AppointmentCreateManyDoctorInputEnvelopeObjectSchema } from './AppointmentCreateManyDoctorInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutDoctorInput>;
export const AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
