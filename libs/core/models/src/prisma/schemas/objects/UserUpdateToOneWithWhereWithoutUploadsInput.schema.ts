import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUploadsInputObjectSchema as UserUpdateWithoutUploadsInputObjectSchema } from './UserUpdateWithoutUploadsInput.schema';
import { UserUncheckedUpdateWithoutUploadsInputObjectSchema as UserUncheckedUpdateWithoutUploadsInputObjectSchema } from './UserUncheckedUpdateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUploadsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUploadsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUploadsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUploadsInput>;
export const UserUpdateToOneWithWhereWithoutUploadsInputObjectZodSchema = makeSchema();
