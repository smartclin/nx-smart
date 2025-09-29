import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingCreateWithoutPatientInputObjectSchema as BillingCreateWithoutPatientInputObjectSchema } from './BillingCreateWithoutPatientInput.schema';
import { BillingUncheckedCreateWithoutPatientInputObjectSchema as BillingUncheckedCreateWithoutPatientInputObjectSchema } from './BillingUncheckedCreateWithoutPatientInput.schema';
import { BillingCreateOrConnectWithoutPatientInputObjectSchema as BillingCreateOrConnectWithoutPatientInputObjectSchema } from './BillingCreateOrConnectWithoutPatientInput.schema';
import { PatientBillingCreateManyPatientInputEnvelopeObjectSchema as BillingCreateManyPatientInputEnvelopeObjectSchema } from './BillingCreateManyPatientInputEnvelope.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillingCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => BillingCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillingCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BillingCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.BillingCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingCreateNestedManyWithoutPatientInput>;
export const BillingCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
