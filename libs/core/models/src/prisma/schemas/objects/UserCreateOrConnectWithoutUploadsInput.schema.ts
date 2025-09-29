import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUploadsInputObjectSchema as UserCreateWithoutUploadsInputObjectSchema } from './UserCreateWithoutUploadsInput.schema';
import { UserUncheckedCreateWithoutUploadsInputObjectSchema as UserUncheckedCreateWithoutUploadsInputObjectSchema } from './UserUncheckedCreateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUploadsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUploadsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUploadsInput>;
export const UserCreateOrConnectWithoutUploadsInputObjectZodSchema = makeSchema();
