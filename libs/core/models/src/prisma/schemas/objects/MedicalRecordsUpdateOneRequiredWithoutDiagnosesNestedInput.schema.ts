import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutDiagnosesInput.schema';
import { MedicalRecordsUpsertWithoutDiagnosesInputObjectSchema as MedicalRecordsUpsertWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUpsertWithoutDiagnosesInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInputObjectSchema as MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInput.schema';
import { MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUpdateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicalRecordsUpsertWithoutDiagnosesInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema)]).optional()
}).strict();
export const MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInput>;
export const MedicalRecordsUpdateOneRequiredWithoutDiagnosesNestedInputObjectZodSchema = makeSchema();
