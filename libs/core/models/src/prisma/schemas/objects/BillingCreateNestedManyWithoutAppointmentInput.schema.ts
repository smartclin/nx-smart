import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingCreateWithoutAppointmentInputObjectSchema as BillingCreateWithoutAppointmentInputObjectSchema } from './BillingCreateWithoutAppointmentInput.schema';
import { BillingUncheckedCreateWithoutAppointmentInputObjectSchema as BillingUncheckedCreateWithoutAppointmentInputObjectSchema } from './BillingUncheckedCreateWithoutAppointmentInput.schema';
import { BillingCreateOrConnectWithoutAppointmentInputObjectSchema as BillingCreateOrConnectWithoutAppointmentInputObjectSchema } from './BillingCreateOrConnectWithoutAppointmentInput.schema';
import { AppointmentBillingCreateManyAppointmentInputEnvelopeObjectSchema as BillingCreateManyAppointmentInputEnvelopeObjectSchema } from './BillingCreateManyAppointmentInputEnvelope.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillingCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => BillingCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillingCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BillingCreateNestedManyWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.BillingCreateNestedManyWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateNestedManyWithoutAppointmentInput>;
export const BillingCreateNestedManyWithoutAppointmentInputObjectZodSchema = makeSchema();
