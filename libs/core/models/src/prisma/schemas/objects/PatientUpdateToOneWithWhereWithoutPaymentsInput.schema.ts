import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutPaymentsInputObjectSchema as PatientUpdateWithoutPaymentsInputObjectSchema } from './PatientUpdateWithoutPaymentsInput.schema';
import { PatientUncheckedUpdateWithoutPaymentsInputObjectSchema as PatientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PatientUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPaymentsInput>;
export const PatientUpdateToOneWithWhereWithoutPaymentsInputObjectZodSchema = makeSchema();
