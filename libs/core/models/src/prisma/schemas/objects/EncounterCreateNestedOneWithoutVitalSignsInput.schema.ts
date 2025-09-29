import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutVitalSignsInputObjectSchema as EncounterCreateWithoutVitalSignsInputObjectSchema } from './EncounterCreateWithoutVitalSignsInput.schema';
import { EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema as EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedCreateWithoutVitalSignsInput.schema';
import { EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema as EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema } from './EncounterCreateOrConnectWithoutVitalSignsInput.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema).optional(),
  connect: z.lazy(() => EncounterWhereUniqueInputObjectSchema).optional()
}).strict();
export const EncounterCreateNestedOneWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.EncounterCreateNestedOneWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateNestedOneWithoutVitalSignsInput>;
export const EncounterCreateNestedOneWithoutVitalSignsInputObjectZodSchema = makeSchema();
