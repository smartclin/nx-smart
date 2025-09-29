import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithoutEncounterInputObjectSchema as VitalSignsUpdateWithoutEncounterInputObjectSchema } from './VitalSignsUpdateWithoutEncounterInput.schema';
import { VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema as VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedUpdateWithoutEncounterInput.schema';
import { VitalSignsCreateWithoutEncounterInputObjectSchema as VitalSignsCreateWithoutEncounterInputObjectSchema } from './VitalSignsCreateWithoutEncounterInput.schema';
import { VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema as VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedCreateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VitalSignsUpdateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema)]),
  create: z.union([z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema)])
}).strict();
export const VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectSchema: z.ZodType<Prisma.VitalSignsUpsertWithWhereUniqueWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpsertWithWhereUniqueWithoutEncounterInput>;
export const VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectZodSchema = makeSchema();
