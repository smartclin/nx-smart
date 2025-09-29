import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutDoctorInputObjectSchema as AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema';
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema as AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema';
import { AppointmentCreateOrConnectWithoutDoctorInputObjectSchema as AppointmentCreateOrConnectWithoutDoctorInputObjectSchema } from './AppointmentCreateOrConnectWithoutDoctorInput.schema';
import { AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './AppointmentUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorAppointmentCreateManyDoctorInputEnvelopeObjectSchema as AppointmentCreateManyDoctorInputEnvelopeObjectSchema } from './AppointmentCreateManyDoctorInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema as AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './AppointmentUpdateManyWithWhereWithoutDoctorInput.schema';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AppointmentScalarWhereInputObjectSchema), z.lazy(() => AppointmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutDoctorNestedInput>;
export const AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
