import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingCreateWithoutPatientInputObjectSchema as BillingCreateWithoutPatientInputObjectSchema } from './BillingCreateWithoutPatientInput.schema';
import { BillingUncheckedCreateWithoutPatientInputObjectSchema as BillingUncheckedCreateWithoutPatientInputObjectSchema } from './BillingUncheckedCreateWithoutPatientInput.schema';
import { BillingCreateOrConnectWithoutPatientInputObjectSchema as BillingCreateOrConnectWithoutPatientInputObjectSchema } from './BillingCreateOrConnectWithoutPatientInput.schema';
import { BillingUpsertWithWhereUniqueWithoutPatientInputObjectSchema as BillingUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './BillingUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientBillingCreateManyPatientInputEnvelopeObjectSchema as BillingCreateManyPatientInputEnvelopeObjectSchema } from './BillingCreateManyPatientInputEnvelope.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './BillingWhereUniqueInput.schema';
import { BillingUpdateWithWhereUniqueWithoutPatientInputObjectSchema as BillingUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './BillingUpdateWithWhereUniqueWithoutPatientInput.schema';
import { BillingUpdateManyWithWhereWithoutPatientInputObjectSchema as BillingUpdateManyWithWhereWithoutPatientInputObjectSchema } from './BillingUpdateManyWithWhereWithoutPatientInput.schema';
import { BillingScalarWhereInputObjectSchema as BillingScalarWhereInputObjectSchema } from './BillingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BillingCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => BillingUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BillingCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => BillingCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BillingUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => BillingUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BillingCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BillingWhereUniqueInputObjectSchema), z.lazy(() => BillingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BillingUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => BillingUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BillingUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => BillingUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BillingScalarWhereInputObjectSchema), z.lazy(() => BillingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BillingUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.BillingUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingUpdateManyWithoutPatientNestedInput>;
export const BillingUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
