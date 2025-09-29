import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAvatarInputObjectSchema as UserUpdateWithoutAvatarInputObjectSchema } from './UserUpdateWithoutAvatarInput.schema';
import { UserUncheckedUpdateWithoutAvatarInputObjectSchema as UserUncheckedUpdateWithoutAvatarInputObjectSchema } from './UserUncheckedUpdateWithoutAvatarInput.schema';
import { UserCreateWithoutAvatarInputObjectSchema as UserCreateWithoutAvatarInputObjectSchema } from './UserCreateWithoutAvatarInput.schema';
import { UserUncheckedCreateWithoutAvatarInputObjectSchema as UserUncheckedCreateWithoutAvatarInputObjectSchema } from './UserUncheckedCreateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAvatarInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutAvatarInput>;
export const UserUpsertWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
