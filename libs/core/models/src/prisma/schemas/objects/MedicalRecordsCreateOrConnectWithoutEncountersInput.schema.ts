import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutEncountersInputObjectSchema as MedicalRecordsCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutEncountersInput>;
export const MedicalRecordsCreateOrConnectWithoutEncountersInputObjectZodSchema = makeSchema();
