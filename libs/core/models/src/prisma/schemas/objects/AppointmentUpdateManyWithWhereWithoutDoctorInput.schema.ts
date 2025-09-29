import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentScalarWhereInputObjectSchema as AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema';
import { AppointmentUpdateManyMutationInputObjectSchema as AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema';
import { AppointmentUncheckedUpdateManyWithoutDoctorInputObjectSchema as AppointmentUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppointmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput>;
export const AppointmentUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
