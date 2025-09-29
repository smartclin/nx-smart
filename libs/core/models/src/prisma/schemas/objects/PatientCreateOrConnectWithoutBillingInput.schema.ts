import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutBillingInputObjectSchema as PatientCreateWithoutBillingInputObjectSchema } from './PatientCreateWithoutBillingInput.schema';
import { PatientUncheckedCreateWithoutBillingInputObjectSchema as PatientUncheckedCreateWithoutBillingInputObjectSchema } from './PatientUncheckedCreateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutBillingInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutBillingInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutBillingInput>;
export const PatientCreateOrConnectWithoutBillingInputObjectZodSchema = makeSchema();
