import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUpsertWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUpsertWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUpsertWithoutPrescriptionsListInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUpdateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicalRecordsUpsertWithoutPrescriptionsListInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema)]).optional()
}).strict();
export const MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInput>;
export const MedicalRecordsUpdateOneRequiredWithoutPrescriptionsListNestedInputObjectZodSchema = makeSchema();
