import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithoutServiceInputObjectSchema as PatientBillsUpdateWithoutServiceInputObjectSchema } from './PatientBillsUpdateWithoutServiceInput.schema';
import { PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema as PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedUpdateWithoutServiceInput.schema';
import { PatientBillsCreateWithoutServiceInputObjectSchema as PatientBillsCreateWithoutServiceInputObjectSchema } from './PatientBillsCreateWithoutServiceInput.schema';
import { PatientBillsUncheckedCreateWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PatientBillsUpdateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpsertWithWhereUniqueWithoutServiceInput>;
export const PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
