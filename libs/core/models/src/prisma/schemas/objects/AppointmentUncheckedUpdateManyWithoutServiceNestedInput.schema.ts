import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutServiceInputObjectSchema as AppointmentCreateWithoutServiceInputObjectSchema } from './AppointmentCreateWithoutServiceInput.schema';
import { AppointmentUncheckedCreateWithoutServiceInputObjectSchema as AppointmentUncheckedCreateWithoutServiceInputObjectSchema } from './AppointmentUncheckedCreateWithoutServiceInput.schema';
import { AppointmentCreateOrConnectWithoutServiceInputObjectSchema as AppointmentCreateOrConnectWithoutServiceInputObjectSchema } from './AppointmentCreateOrConnectWithoutServiceInput.schema';
import { AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectSchema as AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './AppointmentUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ServiceAppointmentCreateManyServiceInputEnvelopeObjectSchema as AppointmentCreateManyServiceInputEnvelopeObjectSchema } from './AppointmentCreateManyServiceInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectSchema as AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './AppointmentUpdateWithWhereUniqueWithoutServiceInput.schema';
import { AppointmentUpdateManyWithWhereWithoutServiceInputObjectSchema as AppointmentUpdateManyWithWhereWithoutServiceInputObjectSchema } from './AppointmentUpdateManyWithWhereWithoutServiceInput.schema';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AppointmentScalarWhereInputObjectSchema), z.lazy(() => AppointmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentUncheckedUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutServiceNestedInput>;
export const AppointmentUncheckedUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
