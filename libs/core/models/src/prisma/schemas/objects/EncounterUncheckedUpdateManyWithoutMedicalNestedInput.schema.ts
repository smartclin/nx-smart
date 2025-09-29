import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutMedicalInputObjectSchema as EncounterCreateWithoutMedicalInputObjectSchema } from './EncounterCreateWithoutMedicalInput.schema';
import { EncounterUncheckedCreateWithoutMedicalInputObjectSchema as EncounterUncheckedCreateWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateWithoutMedicalInput.schema';
import { EncounterCreateOrConnectWithoutMedicalInputObjectSchema as EncounterCreateOrConnectWithoutMedicalInputObjectSchema } from './EncounterCreateOrConnectWithoutMedicalInput.schema';
import { EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectSchema as EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectSchema } from './EncounterUpsertWithWhereUniqueWithoutMedicalInput.schema';
import { MedicalEncounterCreateManyMedicalInputEnvelopeObjectSchema as EncounterCreateManyMedicalInputEnvelopeObjectSchema } from './EncounterCreateManyMedicalInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectSchema as EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectSchema } from './EncounterUpdateWithWhereUniqueWithoutMedicalInput.schema';
import { EncounterUpdateManyWithWhereWithoutMedicalInputObjectSchema as EncounterUpdateManyWithWhereWithoutMedicalInputObjectSchema } from './EncounterUpdateManyWithWhereWithoutMedicalInput.schema';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUpsertWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUpdateWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EncounterUpdateManyWithWhereWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUpdateManyWithWhereWithoutMedicalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EncounterScalarWhereInputObjectSchema), z.lazy(() => EncounterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EncounterUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema: z.ZodType<Prisma.EncounterUncheckedUpdateManyWithoutMedicalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUncheckedUpdateManyWithoutMedicalNestedInput>;
export const EncounterUncheckedUpdateManyWithoutMedicalNestedInputObjectZodSchema = makeSchema();
