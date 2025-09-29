import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutAppointmentsInputObjectSchema as DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema';
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema as DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema';
import { DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema as DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema } from './DoctorCreateOrConnectWithoutAppointmentsInput.schema';
import { DoctorUpsertWithoutAppointmentsInputObjectSchema as DoctorUpsertWithoutAppointmentsInputObjectSchema } from './DoctorUpsertWithoutAppointmentsInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema as DoctorUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutAppointmentsInput.schema';
import { DoctorUpdateWithoutAppointmentsInputObjectSchema as DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema';
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema as DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutAppointmentsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUpdateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput>;
export const DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectZodSchema = makeSchema();
