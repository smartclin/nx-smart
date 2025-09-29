import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutUploadsInputObjectSchema as UserCreateWithoutUploadsInputObjectSchema } from './UserCreateWithoutUploadsInput.schema';
import { UserUncheckedCreateWithoutUploadsInputObjectSchema as UserUncheckedCreateWithoutUploadsInputObjectSchema } from './UserUncheckedCreateWithoutUploadsInput.schema';
import { UserCreateOrConnectWithoutUploadsInputObjectSchema as UserCreateOrConnectWithoutUploadsInputObjectSchema } from './UserCreateOrConnectWithoutUploadsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUploadsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUploadsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUploadsInput>;
export const UserCreateNestedOneWithoutUploadsInputObjectZodSchema = makeSchema();
