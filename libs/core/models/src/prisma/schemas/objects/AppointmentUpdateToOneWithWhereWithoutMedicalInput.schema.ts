import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentUpdateWithoutMedicalInputObjectSchema as AppointmentUpdateWithoutMedicalInputObjectSchema } from './AppointmentUpdateWithoutMedicalInput.schema';
import { AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema as AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema)])
}).strict();
export const AppointmentUpdateToOneWithWhereWithoutMedicalInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutMedicalInput>;
export const AppointmentUpdateToOneWithWhereWithoutMedicalInputObjectZodSchema = makeSchema();
