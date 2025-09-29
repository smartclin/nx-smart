import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutDoctorInputObjectSchema as EncounterCreateWithoutDoctorInputObjectSchema } from './EncounterCreateWithoutDoctorInput.schema';
import { EncounterUncheckedCreateWithoutDoctorInputObjectSchema as EncounterUncheckedCreateWithoutDoctorInputObjectSchema } from './EncounterUncheckedCreateWithoutDoctorInput.schema';
import { EncounterCreateOrConnectWithoutDoctorInputObjectSchema as EncounterCreateOrConnectWithoutDoctorInputObjectSchema } from './EncounterCreateOrConnectWithoutDoctorInput.schema';
import { EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './EncounterUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorEncounterCreateManyDoctorInputEnvelopeObjectSchema as EncounterCreateManyDoctorInputEnvelopeObjectSchema } from './EncounterCreateManyDoctorInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './EncounterUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { EncounterUpdateManyWithWhereWithoutDoctorInputObjectSchema as EncounterUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './EncounterUpdateManyWithWhereWithoutDoctorInput.schema';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EncounterUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EncounterScalarWhereInputObjectSchema), z.lazy(() => EncounterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EncounterUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.EncounterUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateManyWithoutDoctorNestedInput>;
export const EncounterUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
