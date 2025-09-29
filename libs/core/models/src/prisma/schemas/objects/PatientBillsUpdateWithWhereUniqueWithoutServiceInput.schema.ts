import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithoutServiceInputObjectSchema as PatientBillsUpdateWithoutServiceInputObjectSchema } from './PatientBillsUpdateWithoutServiceInput.schema';
import { PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema as PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PatientBillsUpdateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateWithWhereUniqueWithoutServiceInput>;
export const PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
