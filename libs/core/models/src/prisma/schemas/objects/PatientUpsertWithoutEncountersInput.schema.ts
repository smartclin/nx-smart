import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutEncountersInputObjectSchema as PatientUpdateWithoutEncountersInputObjectSchema } from './PatientUpdateWithoutEncountersInput.schema';
import { PatientUncheckedUpdateWithoutEncountersInputObjectSchema as PatientUncheckedUpdateWithoutEncountersInputObjectSchema } from './PatientUncheckedUpdateWithoutEncountersInput.schema';
import { PatientCreateWithoutEncountersInputObjectSchema as PatientCreateWithoutEncountersInputObjectSchema } from './PatientCreateWithoutEncountersInput.schema';
import { PatientUncheckedCreateWithoutEncountersInputObjectSchema as PatientUncheckedCreateWithoutEncountersInputObjectSchema } from './PatientUncheckedCreateWithoutEncountersInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutEncountersInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutEncountersInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutEncountersInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutEncountersInput>;
export const PatientUpsertWithoutEncountersInputObjectZodSchema = makeSchema();
