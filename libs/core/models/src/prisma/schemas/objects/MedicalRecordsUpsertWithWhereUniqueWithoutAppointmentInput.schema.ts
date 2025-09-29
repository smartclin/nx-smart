import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutAppointmentInputObjectSchema as MedicalRecordsUpdateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUpdateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutAppointmentInput.schema';
import { MedicalRecordsCreateWithoutAppointmentInputObjectSchema as MedicalRecordsCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInput>;
export const MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
