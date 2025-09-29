import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { MedicalRecordsUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUpdateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateToOneWithWhereWithoutEncountersInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutEncountersInput>;
export const MedicalRecordsUpdateToOneWithWhereWithoutEncountersInputObjectZodSchema = makeSchema();
