import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutPrescriptionsInputObjectSchema as PatientUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUpdateWithoutPrescriptionsInput.schema';
import { PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema as PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedUpdateWithoutPrescriptionsInput.schema';
import { PatientCreateWithoutPrescriptionsInputObjectSchema as PatientCreateWithoutPrescriptionsInputObjectSchema } from './PatientCreateWithoutPrescriptionsInput.schema';
import { PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema as PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedCreateWithoutPrescriptionsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutPrescriptionsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutPrescriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutPrescriptionsInput>;
export const PatientUpsertWithoutPrescriptionsInputObjectZodSchema = makeSchema();
