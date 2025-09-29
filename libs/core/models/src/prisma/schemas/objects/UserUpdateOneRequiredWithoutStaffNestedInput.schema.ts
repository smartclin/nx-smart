import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutStaffInputObjectSchema as UserCreateWithoutStaffInputObjectSchema } from './UserCreateWithoutStaffInput.schema';
import { UserUncheckedCreateWithoutStaffInputObjectSchema as UserUncheckedCreateWithoutStaffInputObjectSchema } from './UserUncheckedCreateWithoutStaffInput.schema';
import { UserCreateOrConnectWithoutStaffInputObjectSchema as UserCreateOrConnectWithoutStaffInputObjectSchema } from './UserCreateOrConnectWithoutStaffInput.schema';
import { UserUpsertWithoutStaffInputObjectSchema as UserUpsertWithoutStaffInputObjectSchema } from './UserUpsertWithoutStaffInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutStaffInputObjectSchema as UserUpdateToOneWithWhereWithoutStaffInputObjectSchema } from './UserUpdateToOneWithWhereWithoutStaffInput.schema';
import { UserUpdateWithoutStaffInputObjectSchema as UserUpdateWithoutStaffInputObjectSchema } from './UserUpdateWithoutStaffInput.schema';
import { UserUncheckedUpdateWithoutStaffInputObjectSchema as UserUncheckedUpdateWithoutStaffInputObjectSchema } from './UserUncheckedUpdateWithoutStaffInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStaffInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutStaffInputObjectSchema), z.lazy(() => UserUpdateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutStaffNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStaffNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutStaffNestedInput>;
export const UserUpdateOneRequiredWithoutStaffNestedInputObjectZodSchema = makeSchema();
