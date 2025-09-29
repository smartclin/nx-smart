import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema';
import { AppointmentUpdateManyMutationInputObjectSchema as AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema';
import { AppointmentUncheckedUpdateManyWithoutServiceInputObjectSchema as AppointmentUncheckedUpdateManyWithoutServiceInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const AppointmentUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput>;
export const AppointmentUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
