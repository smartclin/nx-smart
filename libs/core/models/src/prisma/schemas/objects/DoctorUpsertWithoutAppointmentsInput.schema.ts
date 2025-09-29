import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutAppointmentsInputObjectSchema as DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema';
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema as DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema';
import { DoctorCreateWithoutAppointmentsInputObjectSchema as DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema';
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema as DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutAppointmentsInput>;
export const DoctorUpsertWithoutAppointmentsInputObjectZodSchema = makeSchema();
