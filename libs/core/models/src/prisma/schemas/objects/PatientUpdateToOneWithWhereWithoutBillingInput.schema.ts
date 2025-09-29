import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutBillingInputObjectSchema as PatientUpdateWithoutBillingInputObjectSchema } from './PatientUpdateWithoutBillingInput.schema';
import { PatientUncheckedUpdateWithoutBillingInputObjectSchema as PatientUncheckedUpdateWithoutBillingInputObjectSchema } from './PatientUncheckedUpdateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutBillingInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutBillingInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutBillingInput>;
export const PatientUpdateToOneWithWhereWithoutBillingInputObjectZodSchema = makeSchema();
