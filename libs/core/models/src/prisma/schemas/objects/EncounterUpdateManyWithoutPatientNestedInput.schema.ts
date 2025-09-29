import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutPatientInputObjectSchema as EncounterCreateWithoutPatientInputObjectSchema } from './EncounterCreateWithoutPatientInput.schema';
import { EncounterUncheckedCreateWithoutPatientInputObjectSchema as EncounterUncheckedCreateWithoutPatientInputObjectSchema } from './EncounterUncheckedCreateWithoutPatientInput.schema';
import { EncounterCreateOrConnectWithoutPatientInputObjectSchema as EncounterCreateOrConnectWithoutPatientInputObjectSchema } from './EncounterCreateOrConnectWithoutPatientInput.schema';
import { EncounterUpsertWithWhereUniqueWithoutPatientInputObjectSchema as EncounterUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './EncounterUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientEncounterCreateManyPatientInputEnvelopeObjectSchema as EncounterCreateManyPatientInputEnvelopeObjectSchema } from './EncounterCreateManyPatientInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithWhereUniqueWithoutPatientInputObjectSchema as EncounterUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './EncounterUpdateWithWhereUniqueWithoutPatientInput.schema';
import { EncounterUpdateManyWithWhereWithoutPatientInputObjectSchema as EncounterUpdateManyWithWhereWithoutPatientInputObjectSchema } from './EncounterUpdateManyWithWhereWithoutPatientInput.schema';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EncounterUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => EncounterUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EncounterUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => EncounterUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EncounterUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => EncounterUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EncounterScalarWhereInputObjectSchema), z.lazy(() => EncounterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EncounterUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.EncounterUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateManyWithoutPatientNestedInput>;
export const EncounterUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
