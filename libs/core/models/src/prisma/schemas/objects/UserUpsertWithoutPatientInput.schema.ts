import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserUpdateWithoutPatientInputObjectSchema as UserUpdateWithoutPatientInputObjectSchema } from './UserUpdateWithoutPatientInput.schema';
import { UserUncheckedUpdateWithoutPatientInputObjectSchema as UserUncheckedUpdateWithoutPatientInputObjectSchema } from './UserUncheckedUpdateWithoutPatientInput.schema';
import { UserCreateWithoutPatientInputObjectSchema as UserCreateWithoutPatientInputObjectSchema } from './UserCreateWithoutPatientInput.schema';
import { UserUncheckedCreateWithoutPatientInputObjectSchema as UserUncheckedCreateWithoutPatientInputObjectSchema } from './UserUncheckedCreateWithoutPatientInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPatientInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPatientInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPatientInput>;
export const UserUpsertWithoutPatientInputObjectZodSchema = makeSchema();
