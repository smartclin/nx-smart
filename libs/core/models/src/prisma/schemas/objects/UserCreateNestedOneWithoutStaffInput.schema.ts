import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutStaffInputObjectSchema as UserCreateWithoutStaffInputObjectSchema } from './UserCreateWithoutStaffInput.schema';
import { UserUncheckedCreateWithoutStaffInputObjectSchema as UserUncheckedCreateWithoutStaffInputObjectSchema } from './UserUncheckedCreateWithoutStaffInput.schema';
import { UserCreateOrConnectWithoutStaffInputObjectSchema as UserCreateOrConnectWithoutStaffInputObjectSchema } from './UserCreateOrConnectWithoutStaffInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutStaffInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStaffInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutStaffInput>;
export const UserCreateNestedOneWithoutStaffInputObjectZodSchema = makeSchema();
