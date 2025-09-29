import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterUpdateWithoutVitalSignsInputObjectSchema as EncounterUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUpdateWithoutVitalSignsInput.schema';
import { EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema as EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedUpdateWithoutVitalSignsInput.schema';
import { EncounterCreateWithoutVitalSignsInputObjectSchema as EncounterCreateWithoutVitalSignsInputObjectSchema } from './EncounterCreateWithoutVitalSignsInput.schema';
import { EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema as EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedCreateWithoutVitalSignsInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EncounterUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema)]),
  create: z.union([z.lazy(() => EncounterCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema)]),
  where: z.lazy(() => EncounterWhereInputObjectSchema).optional()
}).strict();
export const EncounterUpsertWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.EncounterUpsertWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpsertWithoutVitalSignsInput>;
export const EncounterUpsertWithoutVitalSignsInputObjectZodSchema = makeSchema();
