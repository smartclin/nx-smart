import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutAppointmentsInputObjectSchema as PatientCreateWithoutAppointmentsInputObjectSchema } from './PatientCreateWithoutAppointmentsInput.schema';
import { PatientUncheckedCreateWithoutAppointmentsInputObjectSchema as PatientUncheckedCreateWithoutAppointmentsInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentsInput.schema';
import { PatientCreateOrConnectWithoutAppointmentsInputObjectSchema as PatientCreateOrConnectWithoutAppointmentsInputObjectSchema } from './PatientCreateOrConnectWithoutAppointmentsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutAppointmentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutAppointmentsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutAppointmentsInput>;
export const PatientCreateNestedOneWithoutAppointmentsInputObjectZodSchema = makeSchema();
