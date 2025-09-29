import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutMedicalInputObjectSchema as EncounterUpdateWithoutMedicalInputObjectSchema } from './EncounterUpdateWithoutMedicalInput.schema';
import { EncounterUncheckedUpdateWithoutMedicalInputObjectSchema as EncounterUncheckedUpdateWithoutMedicalInputObjectSchema } from './EncounterUncheckedUpdateWithoutMedicalInput.schema';
import { EncounterCreateWithoutMedicalInputObjectSchema as EncounterCreateWithoutMedicalInputObjectSchema } from './EncounterCreateWithoutMedicalInput.schema';
import { EncounterUncheckedCreateWithoutMedicalInputObjectSchema as EncounterUncheckedCreateWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EncounterUpdateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutMedicalInputObjectSchema)]),
  create: z.union([z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutMedicalInput>;
export const EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
