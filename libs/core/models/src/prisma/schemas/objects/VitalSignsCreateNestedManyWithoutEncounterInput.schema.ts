import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsCreateWithoutEncounterInputObjectSchema as VitalSignsCreateWithoutEncounterInputObjectSchema } from './VitalSignsCreateWithoutEncounterInput.schema';
import { VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema as VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedCreateWithoutEncounterInput.schema';
import { VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema as VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema } from './VitalSignsCreateOrConnectWithoutEncounterInput.schema';
import { EncounterVitalSignsCreateManyEncounterInputEnvelopeObjectSchema as VitalSignsCreateManyEncounterInputEnvelopeObjectSchema } from './VitalSignsCreateManyEncounterInputEnvelope.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema).array(), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VitalSignsCreateManyEncounterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VitalSignsCreateNestedManyWithoutEncounterInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateNestedManyWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateNestedManyWithoutEncounterInput>;
export const VitalSignsCreateNestedManyWithoutEncounterInputObjectZodSchema = makeSchema();
