import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionsListInput.schema';
import { MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema as MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutPrescriptionsListInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPrescriptionsListInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionsListInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutPrescriptionsListInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutPrescriptionsListInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutPrescriptionsListInput>;
export const MedicalRecordsCreateNestedOneWithoutPrescriptionsListInputObjectZodSchema = makeSchema();
