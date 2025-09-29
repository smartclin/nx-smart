import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDoctorInputObjectSchema as UserCreateWithoutDoctorInputObjectSchema } from './UserCreateWithoutDoctorInput.schema';
import { UserUncheckedCreateWithoutDoctorInputObjectSchema as UserUncheckedCreateWithoutDoctorInputObjectSchema } from './UserUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDoctorInput>;
export const UserCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
