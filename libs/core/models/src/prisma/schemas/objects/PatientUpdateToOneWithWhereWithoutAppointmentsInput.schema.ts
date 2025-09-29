import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutAppointmentsInputObjectSchema as PatientUpdateWithoutAppointmentsInputObjectSchema } from './PatientUpdateWithoutAppointmentsInput.schema';
import { PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema as PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutAppointmentsInput>;
export const PatientUpdateToOneWithWhereWithoutAppointmentsInputObjectZodSchema = makeSchema();
