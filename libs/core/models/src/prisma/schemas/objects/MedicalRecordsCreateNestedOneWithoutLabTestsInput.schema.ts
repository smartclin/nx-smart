import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutLabTestsInputObjectSchema as MedicalRecordsCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestsInput.schema';
import { MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema as MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutLabTestsInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutLabTestsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutLabTestsInput>;
export const MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectZodSchema = makeSchema();
