import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutAppointmentInputObjectSchema as MedicalRecordsCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInput.schema';
import { MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema as MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutAppointmentInput.schema';
import { MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema as MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema } from './MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInput.schema';
import { AppointmentMedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema as MedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyAppointmentInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema as MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema } from './MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInput.schema';
import { MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectSchema as MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectSchema } from './MedicalRecordsUpdateManyWithWhereWithoutAppointmentInput.schema';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsUpdateManyWithoutAppointmentNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutAppointmentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutAppointmentNestedInput>;
export const MedicalRecordsUpdateManyWithoutAppointmentNestedInputObjectZodSchema = makeSchema();
