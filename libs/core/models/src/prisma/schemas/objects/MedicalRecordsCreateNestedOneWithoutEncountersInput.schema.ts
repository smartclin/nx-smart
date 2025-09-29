import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutEncountersInputObjectSchema as MedicalRecordsCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutEncountersInput.schema';
import { MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema as MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutEncountersInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateNestedOneWithoutEncountersInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutEncountersInput>;
export const MedicalRecordsCreateNestedOneWithoutEncountersInputObjectZodSchema = makeSchema();
