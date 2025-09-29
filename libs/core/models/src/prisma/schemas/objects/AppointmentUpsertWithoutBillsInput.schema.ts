import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentUpdateWithoutBillsInputObjectSchema as AppointmentUpdateWithoutBillsInputObjectSchema } from './AppointmentUpdateWithoutBillsInput.schema';
import { AppointmentUncheckedUpdateWithoutBillsInputObjectSchema as AppointmentUncheckedUpdateWithoutBillsInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillsInput.schema';
import { AppointmentCreateWithoutBillsInputObjectSchema as AppointmentCreateWithoutBillsInputObjectSchema } from './AppointmentCreateWithoutBillsInput.schema';
import { AppointmentUncheckedCreateWithoutBillsInputObjectSchema as AppointmentUncheckedCreateWithoutBillsInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillsInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AppointmentUpdateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputObjectSchema)]),
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputObjectSchema)]),
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentUpsertWithoutBillsInputObjectSchema: z.ZodType<Prisma.AppointmentUpsertWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpsertWithoutBillsInput>;
export const AppointmentUpsertWithoutBillsInputObjectZodSchema = makeSchema();
