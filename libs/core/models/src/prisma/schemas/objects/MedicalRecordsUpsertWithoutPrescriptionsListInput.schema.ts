import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUpdateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema)]),
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpsertWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithoutPrescriptionsListInput>;
export const MedicalRecordsUpsertWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
