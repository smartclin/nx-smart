import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutAppointmentsInputObjectSchema as PatientCreateWithoutAppointmentsInputObjectSchema } from './PatientCreateWithoutAppointmentsInput.schema';
import { PatientUncheckedCreateWithoutAppointmentsInputObjectSchema as PatientUncheckedCreateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentsInput.schema';
import { PatientCreateOrConnectWithoutAppointmentsInputObjectSchema as PatientCreateOrConnectWithoutAppointmentsInputObjectSchema } from './PatientCreateOrConnectWithoutAppointmentsInput.schema';
import { PatientUpsertWithoutAppointmentsInputObjectSchema as PatientUpsertWithoutAppointmentsInputObjectSchema } from './PatientUpsertWithoutAppointmentsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema as PatientUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutAppointmentsInput.schema';
import { PatientUpdateWithoutAppointmentsInputObjectSchema as PatientUpdateWithoutAppointmentsInputObjectSchema } from './PatientUpdateWithoutAppointmentsInput.schema';
import { PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema as PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutAppointmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutAppointmentsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput>;
export const PatientUpdateOneRequiredWithoutAppointmentsNestedInputObjectZodSchema = makeSchema();
