import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutPatientInputObjectSchema as AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema';
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema as AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema';
import { AppointmentCreateOrConnectWithoutPatientInputObjectSchema as AppointmentCreateOrConnectWithoutPatientInputObjectSchema } from './AppointmentCreateOrConnectWithoutPatientInput.schema';
import { PatientAppointmentCreateManyPatientInputEnvelopeObjectSchema as AppointmentCreateManyPatientInputEnvelopeObjectSchema } from './AppointmentCreateManyPatientInputEnvelope.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AppointmentWhereUniqueInputObjectSchema), z.lazy(() => AppointmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AppointmentCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedManyWithoutPatientInput>;
export const AppointmentCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
