import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithoutEncounterInputObjectSchema as VitalSignsUpdateWithoutEncounterInputObjectSchema } from './VitalSignsUpdateWithoutEncounterInput.schema';
import { VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema as VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedUpdateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VitalSignsUpdateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateWithoutEncounterInputObjectSchema)])
}).strict();
export const VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateWithWhereUniqueWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateWithWhereUniqueWithoutEncounterInput>;
export const VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectZodSchema = makeSchema();
