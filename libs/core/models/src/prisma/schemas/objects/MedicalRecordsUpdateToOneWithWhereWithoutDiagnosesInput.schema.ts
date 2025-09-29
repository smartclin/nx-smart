import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUpdateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosesInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInput>;
export const MedicalRecordsUpdateToOneWithWhereWithoutDiagnosesInputObjectZodSchema = makeSchema();
