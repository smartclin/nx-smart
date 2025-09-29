import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutLabTestsInputObjectSchema as MedicalRecordsCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutLabTestsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutLabTestsInput>;
export const MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectZodSchema = makeSchema();
