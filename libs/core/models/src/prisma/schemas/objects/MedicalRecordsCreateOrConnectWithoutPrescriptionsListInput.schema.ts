import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionsListInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPrescriptionsListInput>;
export const MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
