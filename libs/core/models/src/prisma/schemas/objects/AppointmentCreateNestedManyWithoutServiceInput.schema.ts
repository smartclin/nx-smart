import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutServiceInputObjectSchema as AppointmentCreateWithoutServiceInputObjectSchema } from './AppointmentCreateWithoutServiceInput.schema';
import { AppointmentUncheckedCreateWithoutServiceInputObjectSchema as AppointmentUncheckedCreateWithoutServiceInputObjectSchema } from './AppointmentUncheckedCreateWithoutServiceInput.schema';
import { AppointmentCreateOrConnectWithoutServiceInputObjectSchema as AppointmentCreateOrConnectWithoutServiceInputObjectSchema } from './AppointmentCreateOrConnectWithoutServiceInput.schema';
import { ServiceAppointmentCreateManyServiceInputEnvelopeObjectSchema as AppointmentCreateManyServiceInputEnvelopeObjectSchema } from './AppointmentCreateManyServiceInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedManyWithoutServiceInput>;
export const AppointmentCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
