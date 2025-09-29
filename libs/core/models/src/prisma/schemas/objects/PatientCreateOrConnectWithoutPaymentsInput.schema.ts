import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutPaymentsInputObjectSchema as PatientCreateWithoutPaymentsInputObjectSchema } from './PatientCreateWithoutPaymentsInput.schema';
import { PatientUncheckedCreateWithoutPaymentsInputObjectSchema as PatientUncheckedCreateWithoutPaymentsInputObjectSchema } from './PatientUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutPaymentsInput>;
export const PatientCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
