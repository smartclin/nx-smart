import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUpdateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosesInput.schema';
import { MedicalRecordsCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema)]),
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpsertWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithoutDiagnosesInput>;
export const MedicalRecordsUpsertWithoutDiagnosesInputObjectZodSchema = makeSchema();
