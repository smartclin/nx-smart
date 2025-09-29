import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserUpdateWithoutDoctorInputObjectSchema as UserUpdateWithoutDoctorInputObjectSchema } from './UserUpdateWithoutDoctorInput.schema';
import { UserUncheckedUpdateWithoutDoctorInputObjectSchema as UserUncheckedUpdateWithoutDoctorInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorInput.schema';
import { UserCreateWithoutDoctorInputObjectSchema as UserCreateWithoutDoctorInputObjectSchema } from './UserCreateWithoutDoctorInput.schema';
import { UserUncheckedCreateWithoutDoctorInputObjectSchema as UserUncheckedCreateWithoutDoctorInputObjectSchema } from './UserUncheckedCreateWithoutDoctorInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDoctorInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDoctorInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDoctorInput>;
export const UserUpsertWithoutDoctorInputObjectZodSchema = makeSchema();
