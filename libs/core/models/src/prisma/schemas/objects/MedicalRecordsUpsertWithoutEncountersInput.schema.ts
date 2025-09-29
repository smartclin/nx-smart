import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUpdateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutEncountersInput.schema';
import { MedicalRecordsCreateWithoutEncountersInputObjectSchema as MedicalRecordsCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutEncountersInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema)]),
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpsertWithoutEncountersInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithoutEncountersInput>;
export const MedicalRecordsUpsertWithoutEncountersInputObjectZodSchema = makeSchema();
