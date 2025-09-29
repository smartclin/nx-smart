import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutPatientInputObjectSchema as MedicalRecordsCreateWithoutPatientInputObjectSchema } from './MedicalRecordsCreateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPatientInput>;
export const MedicalRecordsCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
