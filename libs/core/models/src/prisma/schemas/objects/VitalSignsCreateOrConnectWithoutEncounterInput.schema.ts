import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsCreateWithoutEncounterInputObjectSchema as VitalSignsCreateWithoutEncounterInputObjectSchema } from './VitalSignsCreateWithoutEncounterInput.schema';
import { VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema as VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedCreateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema)])
}).strict();
export const VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateOrConnectWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateOrConnectWithoutEncounterInput>;
export const VitalSignsCreateOrConnectWithoutEncounterInputObjectZodSchema = makeSchema();
