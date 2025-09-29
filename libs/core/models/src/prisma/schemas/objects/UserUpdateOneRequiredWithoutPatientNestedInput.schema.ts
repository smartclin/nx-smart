import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutPatientInputObjectSchema as UserCreateWithoutPatientInputObjectSchema } from './UserCreateWithoutPatientInput.schema';
import { UserUncheckedCreateWithoutPatientInputObjectSchema as UserUncheckedCreateWithoutPatientInputObjectSchema } from './UserUncheckedCreateWithoutPatientInput.schema';
import { UserCreateOrConnectWithoutPatientInputObjectSchema as UserCreateOrConnectWithoutPatientInputObjectSchema } from './UserCreateOrConnectWithoutPatientInput.schema';
import { UserUpsertWithoutPatientInputObjectSchema as UserUpsertWithoutPatientInputObjectSchema } from './UserUpsertWithoutPatientInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPatientInputObjectSchema as UserUpdateToOneWithWhereWithoutPatientInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPatientInput.schema';
import { UserUpdateWithoutPatientInputObjectSchema as UserUpdateWithoutPatientInputObjectSchema } from './UserUpdateWithoutPatientInput.schema';
import { UserUncheckedUpdateWithoutPatientInputObjectSchema as UserUncheckedUpdateWithoutPatientInputObjectSchema } from './UserUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPatientInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPatientInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPatientInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPatientInputObjectSchema), z.lazy(() => UserUpdateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPatientInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPatientNestedInput>;
export const UserUpdateOneRequiredWithoutPatientNestedInputObjectZodSchema = makeSchema();
