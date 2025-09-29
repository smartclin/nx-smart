import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosesInput.schema';
import { MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema as MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutDiagnosesInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDiagnosesInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutDiagnosesInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutDiagnosesInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutDiagnosesInput>;
export const MedicalRecordsCreateNestedOneWithoutDiagnosesInputObjectZodSchema = makeSchema();
