import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutMedicalInputObjectSchema as AppointmentCreateWithoutMedicalInputObjectSchema } from './AppointmentCreateWithoutMedicalInput.schema';
import { AppointmentUncheckedCreateWithoutMedicalInputObjectSchema as AppointmentUncheckedCreateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedCreateWithoutMedicalInput.schema';
import { AppointmentCreateOrConnectWithoutMedicalInputObjectSchema as AppointmentCreateOrConnectWithoutMedicalInputObjectSchema } from './AppointmentCreateOrConnectWithoutMedicalInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutMedicalInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AppointmentCreateNestedOneWithoutMedicalInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedOneWithoutMedicalInput>;
export const AppointmentCreateNestedOneWithoutMedicalInputObjectZodSchema = makeSchema();
