import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutDiagnosesInput>;
export const MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectZodSchema = makeSchema();
