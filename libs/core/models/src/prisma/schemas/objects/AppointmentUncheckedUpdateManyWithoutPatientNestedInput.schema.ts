import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutPatientInputObjectSchema as AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema';
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema as AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema';
import { AppointmentCreateOrConnectWithoutPatientInputObjectSchema as AppointmentCreateOrConnectWithoutPatientInputObjectSchema } from './AppointmentCreateOrConnectWithoutPatientInput.schema';
import { AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema as AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './AppointmentUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientAppointmentCreateManyPatientInputEnvelopeObjectSchema as AppointmentCreateManyPatientInputEnvelopeObjectSchema } from './AppointmentCreateManyPatientInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema as AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './AppointmentUpdateWithWhereUniqueWithoutPatientInput.schema';
import { AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema as AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema } from './AppointmentUpdateManyWithWhereWithoutPatientInput.schema';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AppointmentScalarWhereInputObjectSchema), z.lazy(() => AppointmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutPatientNestedInput>;
export const AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
