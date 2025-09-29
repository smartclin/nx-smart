import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutPaymentsInputObjectSchema as PatientCreateWithoutPaymentsInputObjectSchema } from './PatientCreateWithoutPaymentsInput.schema';
import { PatientUncheckedCreateWithoutPaymentsInputObjectSchema as PatientUncheckedCreateWithoutPaymentsInputObjectSchema } from './PatientUncheckedCreateWithoutPaymentsInput.schema';
import { PatientCreateOrConnectWithoutPaymentsInputObjectSchema as PatientCreateOrConnectWithoutPaymentsInputObjectSchema } from './PatientCreateOrConnectWithoutPaymentsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutPaymentsInput>;
export const PatientCreateNestedOneWithoutPaymentsInputObjectZodSchema = makeSchema();
