import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutDoctorInputObjectSchema as UserCreateWithoutDoctorInputObjectSchema } from './UserCreateWithoutDoctorInput.schema';
import { UserUncheckedCreateWithoutDoctorInputObjectSchema as UserUncheckedCreateWithoutDoctorInputObjectSchema } from './UserUncheckedCreateWithoutDoctorInput.schema';
import { UserCreateOrConnectWithoutDoctorInputObjectSchema as UserCreateOrConnectWithoutDoctorInputObjectSchema } from './UserCreateOrConnectWithoutDoctorInput.schema';
import { UserUpsertWithoutDoctorInputObjectSchema as UserUpsertWithoutDoctorInputObjectSchema } from './UserUpsertWithoutDoctorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDoctorInputObjectSchema as UserUpdateToOneWithWhereWithoutDoctorInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDoctorInput.schema';
import { UserUpdateWithoutDoctorInputObjectSchema as UserUpdateWithoutDoctorInputObjectSchema } from './UserUpdateWithoutDoctorInput.schema';
import { UserUncheckedUpdateWithoutDoctorInputObjectSchema as UserUncheckedUpdateWithoutDoctorInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDoctorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDoctorInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDoctorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => UserUpdateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDoctorInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDoctorNestedInput>;
export const UserUpdateOneRequiredWithoutDoctorNestedInputObjectZodSchema = makeSchema();
