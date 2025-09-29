import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutEncounterInputObjectSchema as DoctorUpdateWithoutEncounterInputObjectSchema } from './DoctorUpdateWithoutEncounterInput.schema';
import { DoctorUncheckedUpdateWithoutEncounterInputObjectSchema as DoctorUncheckedUpdateWithoutEncounterInputObjectSchema } from './DoctorUncheckedUpdateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutEncounterInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutEncounterInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutEncounterInput>;
export const DoctorUpdateToOneWithWhereWithoutEncounterInputObjectZodSchema = makeSchema();
