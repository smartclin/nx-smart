import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutMedicalInputObjectSchema as AppointmentCreateWithoutMedicalInputObjectSchema } from './AppointmentCreateWithoutMedicalInput.schema';
import { AppointmentUncheckedCreateWithoutMedicalInputObjectSchema as AppointmentUncheckedCreateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedCreateWithoutMedicalInput.schema';
import { AppointmentCreateOrConnectWithoutMedicalInputObjectSchema as AppointmentCreateOrConnectWithoutMedicalInputObjectSchema } from './AppointmentCreateOrConnectWithoutMedicalInput.schema';
import { AppointmentUpsertWithoutMedicalInputObjectSchema as AppointmentUpsertWithoutMedicalInputObjectSchema } from './AppointmentUpsertWithoutMedicalInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateToOneWithWhereWithoutMedicalInputObjectSchema as AppointmentUpdateToOneWithWhereWithoutMedicalInputObjectSchema } from './AppointmentUpdateToOneWithWhereWithoutMedicalInput.schema';
import { AppointmentUpdateWithoutMedicalInputObjectSchema as AppointmentUpdateWithoutMedicalInputObjectSchema } from './AppointmentUpdateWithoutMedicalInput.schema';
import { AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema as AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema } from './AppointmentUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutMedicalInputObjectSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutMedicalInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateToOneWithWhereWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUpdateWithoutMedicalInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputObjectSchema)]).optional()
}).strict();
export const AppointmentUpdateOneRequiredWithoutMedicalNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutMedicalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutMedicalNestedInput>;
export const AppointmentUpdateOneRequiredWithoutMedicalNestedInputObjectZodSchema = makeSchema();
