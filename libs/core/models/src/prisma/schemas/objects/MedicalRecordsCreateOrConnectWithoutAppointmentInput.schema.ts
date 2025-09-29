import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutAppointmentInputObjectSchema as MedicalRecordsCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsCreateWithoutAppointmentInput.schema';
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutAppointmentInput>;
export const MedicalRecordsCreateOrConnectWithoutAppointmentInputObjectZodSchema = makeSchema();
