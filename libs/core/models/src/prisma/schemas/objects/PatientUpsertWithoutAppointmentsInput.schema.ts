import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutAppointmentsInputObjectSchema as PatientUpdateWithoutAppointmentsInputObjectSchema } from './PatientUpdateWithoutAppointmentsInput.schema';
import { PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema as PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentsInput.schema';
import { PatientCreateWithoutAppointmentsInputObjectSchema as PatientCreateWithoutAppointmentsInputObjectSchema } from './PatientCreateWithoutAppointmentsInput.schema';
import { PatientUncheckedCreateWithoutAppointmentsInputObjectSchema as PatientUncheckedCreateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutAppointmentsInput>;
export const PatientUpsertWithoutAppointmentsInputObjectZodSchema = makeSchema();
