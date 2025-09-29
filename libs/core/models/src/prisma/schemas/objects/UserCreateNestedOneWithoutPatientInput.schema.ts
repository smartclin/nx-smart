import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutPatientInputObjectSchema as UserCreateWithoutPatientInputObjectSchema } from './UserCreateWithoutPatientInput.schema';
import { UserUncheckedCreateWithoutPatientInputObjectSchema as UserUncheckedCreateWithoutPatientInputObjectSchema } from './UserUncheckedCreateWithoutPatientInput.schema';
import { UserCreateOrConnectWithoutPatientInputObjectSchema as UserCreateOrConnectWithoutPatientInputObjectSchema } from './UserCreateOrConnectWithoutPatientInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPatientInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPatientInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPatientInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPatientInput>;
export const UserCreateNestedOneWithoutPatientInputObjectZodSchema = makeSchema();
