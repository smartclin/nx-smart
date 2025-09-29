import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutBillingInputObjectSchema as PatientCreateWithoutBillingInputObjectSchema } from './PatientCreateWithoutBillingInput.schema';
import { PatientUncheckedCreateWithoutBillingInputObjectSchema as PatientUncheckedCreateWithoutBillingInputObjectSchema } from './PatientUncheckedCreateWithoutBillingInput.schema';
import { PatientCreateOrConnectWithoutBillingInputObjectSchema as PatientCreateOrConnectWithoutBillingInputObjectSchema } from './PatientCreateOrConnectWithoutBillingInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutBillingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutBillingInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutBillingInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutBillingInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutBillingInput>;
export const PatientCreateNestedOneWithoutBillingInputObjectZodSchema = makeSchema();
