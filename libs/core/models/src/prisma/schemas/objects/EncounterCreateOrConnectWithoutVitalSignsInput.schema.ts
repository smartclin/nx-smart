import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterCreateWithoutVitalSignsInputObjectSchema as EncounterCreateWithoutVitalSignsInputObjectSchema } from './EncounterCreateWithoutVitalSignsInput.schema';
import { EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema as EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedCreateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EncounterCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema)])
}).strict();
export const EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.EncounterCreateOrConnectWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateOrConnectWithoutVitalSignsInput>;
export const EncounterCreateOrConnectWithoutVitalSignsInputObjectZodSchema = makeSchema();
