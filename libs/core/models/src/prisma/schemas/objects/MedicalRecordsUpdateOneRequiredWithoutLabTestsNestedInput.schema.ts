import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutLabTestsInputObjectSchema as MedicalRecordsCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestsInput.schema';
import { MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema as MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutLabTestsInput.schema';
import { MedicalRecordsUpsertWithoutLabTestsInputObjectSchema as MedicalRecordsUpsertWithoutLabTestsInputObjectSchema } from './MedicalRecordsUpsertWithoutLabTestsInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInputObjectSchema as MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInputObjectSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInput.schema';
import { MedicalRecordsUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUpdateWithoutLabTestsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutLabTestsInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicalRecordsUpsertWithoutLabTestsInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithoutLabTestsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestsInputObjectSchema)]).optional()
}).strict();
export const MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInput>;
export const MedicalRecordsUpdateOneRequiredWithoutLabTestsNestedInputObjectZodSchema = makeSchema();
