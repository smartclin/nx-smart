import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutAppointmentsInputObjectSchema as PatientCreateWithoutAppointmentsInputObjectSchema } from './PatientCreateWithoutAppointmentsInput.schema';
import { PatientUncheckedCreateWithoutAppointmentsInputObjectSchema as PatientUncheckedCreateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutAppointmentsInput>;
export const PatientCreateOrConnectWithoutAppointmentsInputObjectZodSchema = makeSchema();
