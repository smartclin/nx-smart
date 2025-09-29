import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUpdateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionsListInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInput>;
export const MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
