import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutPaymentsInputObjectSchema as PatientCreateWithoutPaymentsInputObjectSchema } from './PatientCreateWithoutPaymentsInput.schema';
import { PatientUncheckedCreateWithoutPaymentsInputObjectSchema as PatientUncheckedCreateWithoutPaymentsInputObjectSchema } from './PatientUncheckedCreateWithoutPaymentsInput.schema';
import { PatientCreateOrConnectWithoutPaymentsInputObjectSchema as PatientCreateOrConnectWithoutPaymentsInputObjectSchema } from './PatientCreateOrConnectWithoutPaymentsInput.schema';
import { PatientUpsertWithoutPaymentsInputObjectSchema as PatientUpsertWithoutPaymentsInputObjectSchema } from './PatientUpsertWithoutPaymentsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema as PatientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { PatientUpdateWithoutPaymentsInputObjectSchema as PatientUpdateWithoutPaymentsInputObjectSchema } from './PatientUpdateWithoutPaymentsInput.schema';
import { PatientUncheckedUpdateWithoutPaymentsInputObjectSchema as PatientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PatientUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPaymentsNestedInput>;
export const PatientUpdateOneRequiredWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
