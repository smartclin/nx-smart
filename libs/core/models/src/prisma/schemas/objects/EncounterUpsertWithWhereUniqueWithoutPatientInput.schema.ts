import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutPatientInputObjectSchema as EncounterUpdateWithoutPatientInputObjectSchema } from './EncounterUpdateWithoutPatientInput.schema';
import { EncounterUncheckedUpdateWithoutPatientInputObjectSchema as EncounterUncheckedUpdateWithoutPatientInputObjectSchema } from './EncounterUncheckedUpdateWithoutPatientInput.schema';
import { EncounterCreateWithoutPatientInputObjectSchema as EncounterCreateWithoutPatientInputObjectSchema } from './EncounterCreateWithoutPatientInput.schema';
import { EncounterUncheckedCreateWithoutPatientInputObjectSchema as EncounterUncheckedCreateWithoutPatientInputObjectSchema } from './EncounterUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EncounterUpdateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const EncounterUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutPatientInput>;
export const EncounterUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
