import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserUpdateWithoutUploadsInputObjectSchema as UserUpdateWithoutUploadsInputObjectSchema } from './UserUpdateWithoutUploadsInput.schema';
import { UserUncheckedUpdateWithoutUploadsInputObjectSchema as UserUncheckedUpdateWithoutUploadsInputObjectSchema } from './UserUncheckedUpdateWithoutUploadsInput.schema';
import { UserCreateWithoutUploadsInputObjectSchema as UserCreateWithoutUploadsInputObjectSchema } from './UserCreateWithoutUploadsInput.schema';
import { UserUncheckedCreateWithoutUploadsInputObjectSchema as UserUncheckedCreateWithoutUploadsInputObjectSchema } from './UserUncheckedCreateWithoutUploadsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUploadsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUploadsInput>;
export const UserUpsertWithoutUploadsInputObjectZodSchema = makeSchema();
