import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutUserInputObjectSchema as DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema';
import { DoctorUncheckedCreateWithoutUserInputObjectSchema as DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema';
import { DoctorCreateOrConnectWithoutUserInputObjectSchema as DoctorCreateOrConnectWithoutUserInputObjectSchema } from './DoctorCreateOrConnectWithoutUserInput.schema';
import { DoctorUpsertWithWhereUniqueWithoutUserInputObjectSchema as DoctorUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DoctorUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserDoctorCreateManyUserInputEnvelopeObjectSchema as DoctorCreateManyUserInputEnvelopeObjectSchema } from './DoctorCreateManyUserInputEnvelope.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithWhereUniqueWithoutUserInputObjectSchema as DoctorUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DoctorUpdateWithWhereUniqueWithoutUserInput.schema';
import { DoctorUpdateManyWithWhereWithoutUserInputObjectSchema as DoctorUpdateManyWithWhereWithoutUserInputObjectSchema } from './DoctorUpdateManyWithWhereWithoutUserInput.schema';
import { DoctorScalarWhereInputObjectSchema as DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DoctorUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => DoctorUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => DoctorUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorScalarWhereInputObjectSchema), z.lazy(() => DoctorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateManyWithoutUserNestedInput>;
export const DoctorUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
