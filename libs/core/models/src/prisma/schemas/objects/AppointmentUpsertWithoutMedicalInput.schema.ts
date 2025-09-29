import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentUpdateWithoutMedicalInputObjectSchema as AppointmentUpdateWithoutMedicalInputObjectSchema } from './AppointmentUpdateWithoutMedicalInput.schema';
import { AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema as AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedUpdateWithoutMedicalInput.schema';
import { AppointmentCreateWithoutMedicalInputObjectSchema as AppointmentCreateWithoutMedicalInputObjectSchema } from './AppointmentCreateWithoutMedicalInput.schema';
import { AppointmentUncheckedCreateWithoutMedicalInputObjectSchema as AppointmentUncheckedCreateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedCreateWithoutMedicalInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AppointmentUpdateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputObjectSchema)]),
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentUpsertWithoutMedicalInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithoutMedicalInput>;
export const AppointmentUpsertWithoutMedicalInputObjectZodSchema = makeSchema();
