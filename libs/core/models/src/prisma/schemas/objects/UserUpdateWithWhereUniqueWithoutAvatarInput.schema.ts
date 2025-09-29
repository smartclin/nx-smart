import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAvatarInputObjectSchema as UserUpdateWithoutAvatarInputObjectSchema } from './UserUpdateWithoutAvatarInput.schema';
import { UserUncheckedUpdateWithoutAvatarInputObjectSchema as UserUncheckedUpdateWithoutAvatarInputObjectSchema } from './UserUncheckedUpdateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAvatarInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutAvatarInput>;
export const UserUpdateWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
