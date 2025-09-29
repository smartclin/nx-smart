import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { TwoFactorCreateWithoutUserInputObjectSchema as TwoFactorCreateWithoutUserInputObjectSchema } from './TwoFactorCreateWithoutUserInput.schema';
import { TwoFactorUncheckedCreateWithoutUserInputObjectSchema as TwoFactorUncheckedCreateWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateWithoutUserInput.schema';
import { TwoFactorCreateOrConnectWithoutUserInputObjectSchema as TwoFactorCreateOrConnectWithoutUserInputObjectSchema } from './TwoFactorCreateOrConnectWithoutUserInput.schema';
import { TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectSchema as TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TwoFactorUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserTwoFactorCreateManyUserInputEnvelopeObjectSchema as TwoFactorCreateManyUserInputEnvelopeObjectSchema } from './TwoFactorCreateManyUserInputEnvelope.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema';
import { TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectSchema as TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TwoFactorUpdateWithWhereUniqueWithoutUserInput.schema';
import { TwoFactorUpdateManyWithWhereWithoutUserInputObjectSchema as TwoFactorUpdateManyWithWhereWithoutUserInputObjectSchema } from './TwoFactorUpdateManyWithWhereWithoutUserInput.schema';
import { TwoFactorScalarWhereInputObjectSchema as TwoFactorScalarWhereInputObjectSchema } from './TwoFactorScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TwoFactorScalarWhereInputObjectSchema), z.lazy(() => TwoFactorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TwoFactorUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedUpdateManyWithoutUserNestedInput>;
export const TwoFactorUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
