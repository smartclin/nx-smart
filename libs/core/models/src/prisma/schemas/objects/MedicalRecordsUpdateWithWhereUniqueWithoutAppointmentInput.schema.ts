import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutAppointmentInputObjectSchema as MedicalRecordsUpdateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUpdateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutAppointmentInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInput>;
export const MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputObjectZodSchema = makeSchema();
