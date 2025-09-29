import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutBillsInputObjectSchema as AppointmentCreateWithoutBillsInputObjectSchema } from './AppointmentCreateWithoutBillsInput.schema';
import { AppointmentUncheckedCreateWithoutBillsInputObjectSchema as AppointmentUncheckedCreateWithoutBillsInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillsInput.schema';
import { AppointmentCreateOrConnectWithoutBillsInputObjectSchema as AppointmentCreateOrConnectWithoutBillsInputObjectSchema } from './AppointmentCreateOrConnectWithoutBillsInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AppointmentCreateNestedOneWithoutBillsInputObjectSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateNestedOneWithoutBillsInput>;
export const AppointmentCreateNestedOneWithoutBillsInputObjectZodSchema = makeSchema();
