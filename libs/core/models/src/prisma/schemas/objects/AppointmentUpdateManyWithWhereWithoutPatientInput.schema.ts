import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema';
import { AppointmentUpdateManyMutationInputObjectSchema as AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema';
import { AppointmentUncheckedUpdateManyWithoutPatientInputObjectSchema as AppointmentUncheckedUpdateManyWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput>;
export const AppointmentUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
