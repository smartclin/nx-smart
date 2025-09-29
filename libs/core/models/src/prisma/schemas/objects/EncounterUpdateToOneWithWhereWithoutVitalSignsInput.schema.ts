import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema';
import { EncounterUpdateWithoutVitalSignsInputObjectSchema as EncounterUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUpdateWithoutVitalSignsInput.schema';
import { EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema as EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedUpdateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EncounterUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema)])
}).strict();
export const EncounterUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.EncounterUpdateToOneWithWhereWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateToOneWithWhereWithoutVitalSignsInput>;
export const EncounterUpdateToOneWithWhereWithoutVitalSignsInputObjectZodSchema = makeSchema();
