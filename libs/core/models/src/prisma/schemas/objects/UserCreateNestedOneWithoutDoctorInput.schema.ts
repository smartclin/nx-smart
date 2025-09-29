import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateWithoutDoctorInputObjectSchema as UserCreateWithoutDoctorInputObjectSchema } from './UserCreateWithoutDoctorInput.schema';
import { UserUncheckedCreateWithoutDoctorInputObjectSchema as UserUncheckedCreateWithoutDoctorInputObjectSchema } from './UserUncheckedCreateWithoutDoctorInput.schema';
import { UserCreateOrConnectWithoutDoctorInputObjectSchema as UserCreateOrConnectWithoutDoctorInputObjectSchema } from './UserCreateOrConnectWithoutDoctorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDoctorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDoctorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDoctorInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDoctorInput>;
export const UserCreateNestedOneWithoutDoctorInputObjectZodSchema = makeSchema();
