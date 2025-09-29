import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutStaffInputObjectSchema as UserUpdateWithoutStaffInputObjectSchema } from './UserUpdateWithoutStaffInput.schema';
import { UserUncheckedUpdateWithoutStaffInputObjectSchema as UserUncheckedUpdateWithoutStaffInputObjectSchema } from './UserUncheckedUpdateWithoutStaffInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutStaffInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutStaffInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStaffInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStaffInput>;
export const UserUpdateToOneWithWhereWithoutStaffInputObjectZodSchema = makeSchema();
