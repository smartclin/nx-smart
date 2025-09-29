import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutBillingInputObjectSchema as PatientUpdateWithoutBillingInputObjectSchema } from './PatientUpdateWithoutBillingInput.schema';
import { PatientUncheckedUpdateWithoutBillingInputObjectSchema as PatientUncheckedUpdateWithoutBillingInputObjectSchema } from './PatientUncheckedUpdateWithoutBillingInput.schema';
import { PatientCreateWithoutBillingInputObjectSchema as PatientCreateWithoutBillingInputObjectSchema } from './PatientCreateWithoutBillingInput.schema';
import { PatientUncheckedCreateWithoutBillingInputObjectSchema as PatientUncheckedCreateWithoutBillingInputObjectSchema } from './PatientUncheckedCreateWithoutBillingInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutBillingInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutBillingInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutBillingInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutBillingInput>;
export const PatientUpsertWithoutBillingInputObjectZodSchema = makeSchema();
