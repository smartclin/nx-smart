import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutMedicalInputObjectSchema as AppointmentCreateWithoutMedicalInputObjectSchema } from './AppointmentCreateWithoutMedicalInput.schema';
import { AppointmentUncheckedCreateWithoutMedicalInputObjectSchema as AppointmentUncheckedCreateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutMedicalInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutMedicalInput>;
export const AppointmentCreateOrConnectWithoutMedicalInputObjectZodSchema = makeSchema();
