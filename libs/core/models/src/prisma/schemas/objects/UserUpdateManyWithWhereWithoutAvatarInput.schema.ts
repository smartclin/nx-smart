import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutAvatarInputObjectSchema as UserUncheckedUpdateManyWithoutAvatarInputObjectSchema } from './UserUncheckedUpdateManyWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutAvatarInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutAvatarInput>;
export const UserUpdateManyWithWhereWithoutAvatarInputObjectZodSchema = makeSchema();
