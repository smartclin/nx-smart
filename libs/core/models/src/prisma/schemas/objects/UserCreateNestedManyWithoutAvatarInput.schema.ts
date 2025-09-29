import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutAvatarInputObjectSchema as UserCreateWithoutAvatarInputObjectSchema } from './UserCreateWithoutAvatarInput.schema';
import { UserUncheckedCreateWithoutAvatarInputObjectSchema as UserUncheckedCreateWithoutAvatarInputObjectSchema } from './UserUncheckedCreateWithoutAvatarInput.schema';
import { UserCreateOrConnectWithoutAvatarInputObjectSchema as UserCreateOrConnectWithoutAvatarInputObjectSchema } from './UserCreateOrConnectWithoutAvatarInput.schema';
import { AvatarUserCreateManyAvatarInputEnvelopeObjectSchema as UserCreateManyAvatarInputEnvelopeObjectSchema } from './UserCreateManyAvatarInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserCreateWithoutAvatarInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyAvatarInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserCreateNestedManyWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedManyWithoutAvatarInput>;
export const UserCreateNestedManyWithoutAvatarInputObjectZodSchema = makeSchema();
