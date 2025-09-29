import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutAppointmentsInputObjectSchema as DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema';
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema as DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentsInput>;
export const DoctorCreateOrConnectWithoutAppointmentsInputObjectZodSchema = makeSchema();
