import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutPatientInputObjectSchema as EncounterUpdateWithoutPatientInputObjectSchema } from './EncounterUpdateWithoutPatientInput.schema';
import { EncounterUncheckedUpdateWithoutPatientInputObjectSchema as EncounterUncheckedUpdateWithoutPatientInputObjectSchema } from './EncounterUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const EncounterUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutPatientInput>;
export const EncounterUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
