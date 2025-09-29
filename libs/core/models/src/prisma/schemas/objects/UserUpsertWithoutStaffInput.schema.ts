import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserUpdateWithoutStaffInputObjectSchema as UserUpdateWithoutStaffInputObjectSchema } from './UserUpdateWithoutStaffInput.schema';
import { UserUncheckedUpdateWithoutStaffInputObjectSchema as UserUncheckedUpdateWithoutStaffInputObjectSchema } from './UserUncheckedUpdateWithoutStaffInput.schema';
import { UserCreateWithoutStaffInputObjectSchema as UserCreateWithoutStaffInputObjectSchema } from './UserCreateWithoutStaffInput.schema';
import { UserUncheckedCreateWithoutStaffInputObjectSchema as UserUncheckedCreateWithoutStaffInputObjectSchema } from './UserUncheckedCreateWithoutStaffInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutStaffInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutStaffInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutStaffInput>;
export const UserUpsertWithoutStaffInputObjectZodSchema = makeSchema();
