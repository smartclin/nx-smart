import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAvatarInputObjectSchema as UserCreateWithoutAvatarInputObjectSchema } from './UserCreateWithoutAvatarInput.schema';
import { UserUncheckedCreateWithoutAvatarInputObjectSchema as UserUncheckedCreateWithoutAvatarInputObjectSchema } from './UserUncheckedCreateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAvatarInput>;
export const UserCreateOrConnectWithoutAvatarInputObjectZodSchema = makeSchema();
