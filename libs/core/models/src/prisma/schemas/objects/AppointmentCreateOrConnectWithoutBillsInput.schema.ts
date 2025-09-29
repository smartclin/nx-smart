import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutBillsInputObjectSchema as AppointmentCreateWithoutBillsInputObjectSchema } from './AppointmentCreateWithoutBillsInput.schema';
import { AppointmentUncheckedCreateWithoutBillsInputObjectSchema as AppointmentUncheckedCreateWithoutBillsInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputObjectSchema)])
}).strict();
export const AppointmentCreateOrConnectWithoutBillsInputObjectSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBillsInput>;
export const AppointmentCreateOrConnectWithoutBillsInputObjectZodSchema = makeSchema();
