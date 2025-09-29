import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPatientInputObjectSchema as UserCreateWithoutPatientInputObjectSchema } from './UserCreateWithoutPatientInput.schema';
import { UserUncheckedCreateWithoutPatientInputObjectSchema as UserUncheckedCreateWithoutPatientInputObjectSchema } from './UserUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPatientInput>;
export const UserCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
