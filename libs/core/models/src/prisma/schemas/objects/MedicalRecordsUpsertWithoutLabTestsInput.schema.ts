import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUpdateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestsInput.schema';
import { MedicalRecordsCreateWithoutLabTestsInputObjectSchema as MedicalRecordsCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestsInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema)]),
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpsertWithoutLabTestsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutLabTestsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithoutLabTestsInput>;
export const MedicalRecordsUpsertWithoutLabTestsInputObjectZodSchema = makeSchema();
