import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentUpdateWithoutBillsInputObjectSchema as AppointmentUpdateWithoutBillsInputObjectSchema } from './AppointmentUpdateWithoutBillsInput.schema';
import { AppointmentUncheckedUpdateWithoutBillsInputObjectSchema as AppointmentUncheckedUpdateWithoutBillsInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AppointmentUpdateWithoutBillsInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillsInputObjectSchema)])
}).strict();
export const AppointmentUpdateToOneWithWhereWithoutBillsInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutBillsInput>;
export const AppointmentUpdateToOneWithWhereWithoutBillsInputObjectZodSchema = makeSchema();
