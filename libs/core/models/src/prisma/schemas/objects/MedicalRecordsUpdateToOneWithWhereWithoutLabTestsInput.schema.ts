import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { MedicalRecordsUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUpdateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInput>;
export const MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInputObjectZodSchema = makeSchema();
