import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutEncounterInputObjectSchema as DoctorUpdateWithoutEncounterInputObjectSchema } from './DoctorUpdateWithoutEncounterInput.schema';
import { DoctorUncheckedUpdateWithoutEncounterInputObjectSchema as DoctorUncheckedUpdateWithoutEncounterInputObjectSchema } from './DoctorUncheckedUpdateWithoutEncounterInput.schema';
import { DoctorCreateWithoutEncounterInputObjectSchema as DoctorCreateWithoutEncounterInputObjectSchema } from './DoctorCreateWithoutEncounterInput.schema';
import { DoctorUncheckedCreateWithoutEncounterInputObjectSchema as DoctorUncheckedCreateWithoutEncounterInputObjectSchema } from './DoctorUncheckedCreateWithoutEncounterInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutEncounterInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutEncounterInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutEncounterInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutEncounterInput>;
export const DoctorUpsertWithoutEncounterInputObjectZodSchema = makeSchema();
