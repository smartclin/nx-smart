import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutAppointmentInputObjectSchema as MedicalRecordsCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInput.schema';
import { MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema as MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutAppointmentInput.schema';
import { AppointmentMedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema as MedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyAppointmentInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedManyWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedManyWithoutAppointmentInput>;
export const MedicalRecordsCreateNestedManyWithoutAppointmentInputObjectZodSchema = makeSchema();
