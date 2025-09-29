import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsCreateWithoutEncounterInputObjectSchema as VitalSignsCreateWithoutEncounterInputObjectSchema } from './VitalSignsCreateWithoutEncounterInput.schema';
import { VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema as VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedCreateWithoutEncounterInput.schema';
import { VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema as VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema } from './VitalSignsCreateOrConnectWithoutEncounterInput.schema';
import { VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectSchema as VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectSchema } from './VitalSignsUpsertWithWhereUniqueWithoutEncounterInput.schema';
import { EncounterVitalSignsCreateManyEncounterInputEnvelopeObjectSchema as VitalSignsCreateManyEncounterInputEnvelopeObjectSchema } from './VitalSignsCreateManyEncounterInputEnvelope.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectSchema as VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectSchema } from './VitalSignsUpdateWithWhereUniqueWithoutEncounterInput.schema';
import { VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectSchema as VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectSchema } from './VitalSignsUpdateManyWithWhereWithoutEncounterInput.schema';
import { VitalSignsScalarWhereInputObjectSchema as VitalSignsScalarWhereInputObjectSchema } from './VitalSignsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsCreateWithoutEncounterInputObjectSchema).array(), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutEncounterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsCreateOrConnectWithoutEncounterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutEncounterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VitalSignsCreateManyEncounterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutEncounterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectSchema), z.lazy(() => VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VitalSignsScalarWhereInputObjectSchema), z.lazy(() => VitalSignsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VitalSignsUpdateManyWithoutEncounterNestedInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithoutEncounterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyWithoutEncounterNestedInput>;
export const VitalSignsUpdateManyWithoutEncounterNestedInputObjectZodSchema = makeSchema();
