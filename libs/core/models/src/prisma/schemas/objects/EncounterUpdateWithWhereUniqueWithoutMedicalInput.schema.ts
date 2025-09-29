import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutMedicalInputObjectSchema as EncounterUpdateWithoutMedicalInputObjectSchema } from './EncounterUpdateWithoutMedicalInput.schema';
import { EncounterUncheckedUpdateWithoutMedicalInputObjectSchema as EncounterUncheckedUpdateWithoutMedicalInputObjectSchema } from './EncounterUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutMedicalInputObjectSchema)])
}).strict();
export const EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutMedicalInput>;
export const EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
