import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutAvatarInputObjectSchema as UserCreateWithoutAvatarInputObjectSchema } from './UserCreateWithoutAvatarInput.schema';
import { UserUncheckedCreateWithoutAvatarInputObjectSchema as UserUncheckedCreateWithoutAvatarInputObjectSchema } from './UserUncheckedCreateWithoutAvatarInput.schema';
import { UserCreateOrConnectWithoutAvatarInputObjectSchema as UserCreateOrConnectWithoutAvatarInputObjectSchema } from './UserCreateOrConnectWithoutAvatarInput.schema';
import { UserUpsertWithWhereUniqueWithoutAvatarInputObjectSchema as UserUpsertWithWhereUniqueWithoutAvatarInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutAvatarInput.schema';
import { AvatarUserCreateManyAvatarInputEnvelopeObjectSchema as UserCreateManyAvatarInputEnvelopeObjectSchema } from './UserCreateManyAvatarInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutAvatarInputObjectSchema as UserUpdateWithWhereUniqueWithoutAvatarInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutAvatarInput.schema';
import { UserUpdateManyWithWhereWithoutAvatarInputObjectSchema as UserUpdateManyWithWhereWithoutAvatarInputObjectSchema } from './UserUpdateManyWithWhereWithoutAvatarInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserCreateWithoutAvatarInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyAvatarInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutAvatarInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutAvatarInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutAvatarNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutAvatarNestedInput>;
export const UserUncheckedUpdateManyWithoutAvatarNestedInputObjectZodSchema = makeSchema();
