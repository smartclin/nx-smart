import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutUploadsInputObjectSchema as UserCreateWithoutUploadsInputObjectSchema } from './UserCreateWithoutUploadsInput.schema';
import { UserUncheckedCreateWithoutUploadsInputObjectSchema as UserUncheckedCreateWithoutUploadsInputObjectSchema } from './UserUncheckedCreateWithoutUploadsInput.schema';
import { UserCreateOrConnectWithoutUploadsInputObjectSchema as UserCreateOrConnectWithoutUploadsInputObjectSchema } from './UserCreateOrConnectWithoutUploadsInput.schema';
import { UserUpsertWithoutUploadsInputObjectSchema as UserUpsertWithoutUploadsInputObjectSchema } from './UserUpsertWithoutUploadsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUploadsInputObjectSchema as UserUpdateToOneWithWhereWithoutUploadsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUploadsInput.schema';
import { UserUpdateWithoutUploadsInputObjectSchema as UserUpdateWithoutUploadsInputObjectSchema } from './UserUpdateWithoutUploadsInput.schema';
import { UserUncheckedUpdateWithoutUploadsInputObjectSchema as UserUncheckedUpdateWithoutUploadsInputObjectSchema } from './UserUncheckedUpdateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUploadsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUploadsInputObjectSchema), z.lazy(() => UserUpdateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUploadsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUploadsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutUploadsNestedInput>;
export const UserUpdateOneWithoutUploadsNestedInputObjectZodSchema = makeSchema();
