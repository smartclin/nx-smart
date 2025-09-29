import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCreateWithoutBillingInputObjectSchema as AppointmentCreateWithoutBillingInputObjectSchema } from './AppointmentCreateWithoutBillingInput.schema';
import { AppointmentUncheckedCreateWithoutBillingInputObjectSchema as AppointmentUncheckedCreateWithoutBillingInputObjectSchema } from './AppointmentUncheckedCreateWithoutBillingInput.schema';
import { AppointmentCreateOrConnectWithoutBillingInputObjectSchema as AppointmentCreateOrConnectWithoutBillingInputObjectSchema } from './AppointmentCreateOrConnectWithoutBillingInput.schema';
import { AppointmentUpsertWithoutBillingInputObjectSchema as AppointmentUpsertWithoutBillingInputObjectSchema } from './AppointmentUpsertWithoutBillingInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentUpdateToOneWithWhereWithoutBillingInputObjectSchema as AppointmentUpdateToOneWithWhereWithoutBillingInputObjectSchema } from './AppointmentUpdateToOneWithWhereWithoutBillingInput.schema';
import { AppointmentUpdateWithoutBillingInputObjectSchema as AppointmentUpdateWithoutBillingInputObjectSchema } from './AppointmentUpdateWithoutBillingInput.schema';
import { AppointmentUncheckedUpdateWithoutBillingInputObjectSchema as AppointmentUncheckedUpdateWithoutBillingInputObjectSchema } from './AppointmentUncheckedUpdateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppointmentCreateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutBillingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutBillingInputObjectSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutBillingInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AppointmentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AppointmentUpdateToOneWithWhereWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUpdateWithoutBillingInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutBillingInputObjectSchema)]).optional()
}).strict();
export const AppointmentUpdateOneWithoutBillingNestedInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateOneWithoutBillingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateOneWithoutBillingNestedInput>;
export const AppointmentUpdateOneWithoutBillingNestedInputObjectZodSchema = makeSchema();
