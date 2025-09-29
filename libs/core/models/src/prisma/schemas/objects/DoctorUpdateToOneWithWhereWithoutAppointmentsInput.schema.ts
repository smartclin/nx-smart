import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutAppointmentsInputObjectSchema as DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema';
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema as DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutAppointmentsInput>;
export const DoctorUpdateToOneWithWhereWithoutAppointmentsInputObjectZodSchema = makeSchema();
