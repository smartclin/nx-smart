import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsCreateWithoutServiceInputObjectSchema as PatientBillsCreateWithoutServiceInputObjectSchema } from './PatientBillsCreateWithoutServiceInput.schema';
import { PatientBillsUncheckedCreateWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const PatientBillsCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateOrConnectWithoutServiceInput>;
export const PatientBillsCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
