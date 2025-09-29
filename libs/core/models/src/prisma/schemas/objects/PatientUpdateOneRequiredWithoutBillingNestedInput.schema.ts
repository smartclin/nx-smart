import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutBillingInputObjectSchema as PatientCreateWithoutBillingInputObjectSchema } from './PatientCreateWithoutBillingInput.schema';
import { PatientUncheckedCreateWithoutBillingInputObjectSchema as PatientUncheckedCreateWithoutBillingInputObjectSchema } from './PatientUncheckedCreateWithoutBillingInput.schema';
import { PatientCreateOrConnectWithoutBillingInputObjectSchema as PatientCreateOrConnectWithoutBillingInputObjectSchema } from './PatientCreateOrConnectWithoutBillingInput.schema';
import { PatientUpsertWithoutBillingInputObjectSchema as PatientUpsertWithoutBillingInputObjectSchema } from './PatientUpsertWithoutBillingInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutBillingInputObjectSchema as PatientUpdateToOneWithWhereWithoutBillingInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutBillingInput.schema';
import { PatientUpdateWithoutBillingInputObjectSchema as PatientUpdateWithoutBillingInputObjectSchema } from './PatientUpdateWithoutBillingInput.schema';
import { PatientUncheckedUpdateWithoutBillingInputObjectSchema as PatientUncheckedUpdateWithoutBillingInputObjectSchema } from './PatientUncheckedUpdateWithoutBillingInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutBillingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutBillingInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutBillingInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutBillingInputObjectSchema), z.lazy(() => PatientUpdateWithoutBillingInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutBillingInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutBillingNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutBillingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutBillingNestedInput>;
export const PatientUpdateOneRequiredWithoutBillingNestedInputObjectZodSchema = makeSchema();
