import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStaffInputObjectSchema as UserCreateWithoutStaffInputObjectSchema } from './UserCreateWithoutStaffInput.schema';
import { UserUncheckedCreateWithoutStaffInputObjectSchema as UserUncheckedCreateWithoutStaffInputObjectSchema } from './UserUncheckedCreateWithoutStaffInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutStaffInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStaffInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutStaffInput>;
export const UserCreateOrConnectWithoutStaffInputObjectZodSchema = makeSchema();
