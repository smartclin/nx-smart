import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutBillsInputObjectSchema as AppointmentCreateWithoutBillsInputObjectSchema } from './AppointmentCreateWithoutBillsInput.schema';
import { AppointmentUncheckedCreateWithoutBillsInputObjectSchema as AppointmentUncheckedCreateWithoutBillsInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillsInput.schema';
import { AppointmentCreateOrConnectWithoutBillsInputObjectSchema as AppointmentCreateOrConnectWithoutBillsInputObjectSchema } from './AppointmentCreateOrConnectWithoutBillsInput.schema';
import { AppointmentUpsertWithoutBillsInputObjectSchema as AppointmentUpsertWithoutBillsInputObjectSchema } from './AppointmentUpsertWithoutBillsInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateToOneWithWhereWithoutBillsInputObjectSchema as AppointmentUpdateToOneWithWhereWithoutBillsInputObjectSchema } from './AppointmentUpdateToOneWithWhereWithoutBillsInput.schema';
import { AppointmentUpdateWithoutBillsInputObjectSchema as AppointmentUpdateWithoutBillsInputObjectSchema } from './AppointmentUpdateWithoutBillsInput.schema';
import { AppointmentUncheckedUpdateWithoutBillsInputObjectSchema as AppointmentUncheckedUpdateWithoutBillsInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateToOneWithWhereWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUpdateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputObjectSchema)]).optional()
}).strict();
export const AppointmentUpdateOneRequiredWithoutBillsNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutBillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutBillsNestedInput>;
export const AppointmentUpdateOneRequiredWithoutBillsNestedInputObjectZodSchema = makeSchema();
